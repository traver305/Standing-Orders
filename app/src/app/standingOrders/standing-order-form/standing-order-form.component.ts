import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { StandingOrderService } from 'src/app/services/standing-order.service';

@Component({
  selector: 'pm-standing-order-form',
  templateUrl: './standing-order-form.component.html',
  styleUrls: ['./standing-order-form.component.scss']
})
export class StandingOrderFormComponent implements OnInit{

    appereance: MatFormFieldAppearance ='fill';

    constructor(private router: Router, private route: ActivatedRoute, private standingOrderService: StandingOrderService) {
        
    }


    standingOrderForm = new FormGroup({
        name: new FormControl(''),
        iban: new FormControl(''),
        amount: new FormControl<number | null>(null),
        variableSybmol: new FormControl(''),
        constSymbol: new FormControl(''),
        specificSymbol: new FormControl(''),
        note: new FormControl(''),
        date: new FormControl(''),
        period: new FormControl()
    });

    printForm(): void {
        console.log(this.standingOrderForm.value);
        this.goToParentPage();
    }

    goToParentPage():void {
        this.router.navigateByUrl('/standingOrders');
    }

    localData: any;

    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('id'));
        if (this.route.snapshot.paramMap.get('id') != null ){
            let id = Number(this.route.snapshot.paramMap.get('id'));
            this.standingOrderService.getStandingOrder(id).subscribe(
                data => {
                    console.log(data);
                    this.localData = data;
                    this.loadData();
                },
                error => {
                    alert(error.message);
                }
            )
        }
    }


    loadData(){
        let form = {
            name: this.localData.name,
            iban: this.localData.accountNumber,
            amount: this.localData.amount,
            variableSybmol: this.localData.variableSymbol,
            constSymbol: this.localData.constantSymbol,
            specificSymbol: this.localData.specificSymbol,
            note: this.localData.note,
            date: this.localData.validFrom,
            period: {
                period: this.localData.intervalId,
                specific: this.localData.intervalSpecification
            }
        };
        this.standingOrderForm.patchValue(form);
        console.log(this.standingOrderForm.getRawValue());
    }

}
