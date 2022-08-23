import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { IGridCard } from './authorization.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationHttpService {

    constructor(private http: HttpClient) { }

    getGridCard(){
        return this.http.get<number>('api/grid-card/init');
    }

    postGridCard(body: IGridCard){
        console.log(body);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
            'responseType': 'text' as const
        };
        return this.http.post('api/grid-card/validate', body, httpOptions);
    }
}
