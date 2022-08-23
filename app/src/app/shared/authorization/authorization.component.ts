import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IGridCard {
    pin: number,
    coordinate: number
}

const PIN_REGEX = '([\\d]{4})';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

    coordinate: number = 0;
    firstNumber: String = '';
    lastNumber: String = '';

    flag: boolean = true;

    responseForm = new FormGroup({
        pin: new FormControl<number | null>(null, {
            nonNullable: true,
            validators: [Validators.pattern(PIN_REGEX), Validators.required]
        })
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private matDialogRef: MatDialogRef<AuthorizationComponent>
        ) { }

    ngOnInit(): void {
        this.coordinate = this.data.coordinate;
        this.setCoordinate();
        this.flag = this.data.flag;
        if(this.flag){
            this.responseForm.markAllAsTouched();
        }
    }

    setCoordinate(){
        this.firstNumber = String(this.coordinate)[0];
        this.lastNumber = String(this.coordinate)[1];
    }

    sendPin(){
        this.responseForm.markAllAsTouched();
        if (this.responseForm.valid){
            this.matDialogRef.close(this.responseForm.controls.pin.value);
        }
    }

    cancel(){
        this.matDialogRef.close('');
    }

    get controls(){
        return this.responseForm.controls;
    }

}
