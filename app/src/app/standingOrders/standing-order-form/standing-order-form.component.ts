import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'pm-standing-order-form',
  templateUrl: './standing-order-form.component.html',
  styleUrls: ['./standing-order-form.component.scss']
})
export class StandingOrderFormComponent {

    appereance: MatFormFieldAppearance ='fill';

    constructor(private router: Router, private route: ActivatedRoute) {
        // route.params.pipe(
        //     tap(params => console.log('activated params', params))
        // ).subscribe();
    }

    standingOrderForm = new FormGroup({
        name: new FormControl(''),
        iban: new FormControl(''),
        amount: new FormControl<number | null>(null),
        variableSybmol: new FormControl(''),
        constSymbol: new FormControl(''),
        specificSymbol: new FormControl(''),
        note: new FormControl(''),
        date: new FormControl('')

    });

    printForm(): void {
        console.log(this.standingOrderForm.value);
        this.goToParentPage();
    }

    goToParentPage():void {
        this.router.navigateByUrl('/standingOrders');
    }

}
