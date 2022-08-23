import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { concatMap, mergeMap, of, retry, retryWhen, takeWhile, tap, throwError } from 'rxjs';
import { AuthorizationHttpService } from './authorization-http.service';
import { AuthorizationComponent } from './authorization.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    constructor(private matDialog: MatDialog, private authorizationHttpService: AuthorizationHttpService) { }

    coordinate: number = 0;

    authorization(){
        let pinError = false
        return this.authorizationHttpService.getGridCard().pipe(
            tap(data => {
                this.coordinate = data;
            }),
            concatMap(() => this.matDialog.open(AuthorizationComponent, {data: {flag: pinError, coordinate: this.coordinate}}).afterClosed().pipe(
                takeWhile(token => !!token),
                concatMap(data => this.authorizationHttpService.postGridCard({pin: data, coordinate: this.coordinate}).pipe(
                    tap(token => {console.log(token)})
                ))
            )),
            retryWhen(errors => errors.pipe(
                tap(() => pinError = true),
                mergeMap(response => response.status != 400 ? throwError(() => 'Error!') : of(response)),
            ))
        )
    }
}
