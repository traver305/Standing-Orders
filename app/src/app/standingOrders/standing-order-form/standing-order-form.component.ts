import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-standing-order-form',
  templateUrl: './standing-order-form.component.html',
  styleUrls: ['./standing-order-form.component.scss']
})
export class StandingOrderFormComponent {

    constructor(private router: Router) {
    }

    standingOrderForm = new FormGroup({
        name: new FormControl(''),
        iban: new FormControl(''),
        amount: new FormControl(''),
        variableSybmol: new FormControl(''),
        constSymbol: new FormControl(''),
        specificSymbol: new FormControl(''),
        note: new FormControl('')
        // TODO

    });

    printForm(): void {
        console.log(this.standingOrderForm.value);
        this.goToParentPage();
    }

    goToParentPage():void {
        this.router.navigateByUrl('/standingOrders');
    }

}
