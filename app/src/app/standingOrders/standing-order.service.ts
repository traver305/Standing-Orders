import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IStandingOrder } from './standing-order';
import { IStandingOrderForm } from '../standingOrders/standing-order-form';

@Injectable({
  providedIn: 'root'
})
export class StandingOrderService {

    constructor(private http: HttpClient) {}

    getStandingOrders(){
        return this.http.get<IStandingOrder[]>('/api/standingOrder');
    }

    getStandingOrder(id: number){
        return this.http.get<IStandingOrderForm>(`/api/standingOrder/${id}`);
    }

    postStandingOrder(body: IStandingOrderForm): Observable<IStandingOrderForm>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return this.http.post<IStandingOrderForm>('/api/standingOrder', body, httpOptions).pipe(
            catchError(error => {
                console.log(error.message);
                return of();
            })
        );
    }

    putStandingOrder(body: IStandingOrderForm, id:number): Observable<string>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            }),
            'responseType': 'text' as const
        };
        return this.http.put(`/api/standingOrder/${id}`, body, httpOptions).pipe(
            catchError(error => {
                console.log(error.message);
                return of();
            })
        );
    }

    deleteStandingOrder(id: number){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            }),
            'responseType': 'text' as const
        };
        return this.http.delete(`/api/standingOrder/${id}`, httpOptions).pipe(
            catchError(error => {
                console.log(error.message);
                return of();
            })
        );
    }
    
}
