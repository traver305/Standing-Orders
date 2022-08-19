import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { StandingOrderService } from '../standing-order.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { IStandingOrderForm } from '../standing-order-form';
import { IPeriodicityForm } from 'src/app/shared/periodicity/periodicity-form.component';


const IBAN_REGEX = '([A-Z]{2}[\\d]{22})';

@Component({
  selector: 'pm-standing-order-form',
  templateUrl: './standing-order-form.component.html',
  styleUrls: ['./standing-order-form.component.scss']
})
export class StandingOrderFormComponent implements OnInit{

    edit: boolean = false;

    actualDate: Date = new Date();

    appereance: MatFormFieldAppearance ='fill';

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private standingOrderService: StandingOrderService,
        private _snackBar: MatSnackBar) {
        
    }

    standingOrderForm = new FormGroup({
        name: new FormControl(''),
        accountNumber: new FormControl('', {
            nonNullable: true,
            validators: [Validators.pattern(IBAN_REGEX), Validators.required]
        }),
        amount: new FormControl<number | null>(null, {
            nonNullable: true,
            validators: Validators.required
        }),
        variableSymbol: new FormControl(''),
        constantSymbol: new FormControl(''),
        specificSymbol: new FormControl(''),
        note: new FormControl(''),
        validFrom: new FormControl({}, {
            nonNullable: true,
            validators: Validators.required
        }),
        period: new FormControl<IPeriodicityForm | null>(null)
    });

    saveForm(): void {
        console.log(this.standingOrderForm.value);
        // this.saveValue();
        this.standingOrderForm.markAllAsTouched();
        if (this.standingOrderForm.valid){
            this.goToParentPage();
        }        
    }

    goToParentPage():void {
        this.router.navigateByUrl('/standingOrders');
    }

    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('id'));

        this.actualDate = this.getMinDate();

        if (this.route.snapshot.paramMap.get('id') != null ){
            let id = Number(this.route.snapshot.paramMap.get('id'));
            this.standingOrderService.getStandingOrder(id).pipe(
                tap(data => {
                    this.patchValue(data);
                    this.edit = true;
                }),
                catchError(    
                    error => {
                        this.openSnackBar(error.message);
                        return of('');
                })
            ).subscribe()
        }
    }
    

    patchValue(data: IStandingOrderForm){
        const {intervalId, intervalSpecification, validFrom, ...rest } = data;
        let date = new Date(validFrom || new Date());
        const standingOrder = { ...rest, validFrom: date, period: { intervalId, intervalSpecification } }
        this.standingOrderForm.patchValue(standingOrder);
    }

    // saveValue(){
    //     const {period, ...rest} = this.standingOrderForm.value;
    //     console.log('Saving...')
    //     const intervalId = period?.intervalId;
    //     let intervalSpecification;
    //     if (intervalId === 1){
    //         intervalSpecification = 0;
    //     }
    //     else{
    //         intervalSpecification = period?.intervalSpecification;
    //     }
    //     const standingOrder = { ...rest, intervalId, intervalSpecification }
    //     console.log(standingOrder);
    // }

    openSnackBar(message: string) {
        this._snackBar.open(message, 'Undo');
    }

    getMinDate(): Date{
        let today = new Date();
        return new Date(today.setDate(today.getDate() + 1));
    }

    get controls(){
        return this.standingOrderForm.controls;
    }
}
