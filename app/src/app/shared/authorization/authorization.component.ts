import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

    coordinate: Number = 0;
    firstNumber: String = '';
    lastNumber: String = '';

    responseForm = new FormGroup({
        pin: new FormControl<number | null>(null, {
            nonNullable: true
        })
    });

    constructor(private authorizationService: AuthorizationService, private matDialogRef: MatDialogRef<AuthorizationComponent>) { }

    ngOnInit(): void {
        this.authorization();
    }

    authorization(){
        this.authorizationService.getGridCard().pipe(
            tap(data => {
                this.coordinate = data;
                this.firstNumber = String(this.coordinate)[0];
                this.lastNumber = String(this.coordinate)[1];
            })
        ).subscribe()
    }

}
