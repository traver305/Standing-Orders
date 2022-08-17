import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStandingOrder } from './standing-order';
import { IStandingOrderForm } from '../standingOrders/standing-order-form';
// import { IStandingOrder } from "../standingOrders/standingOrder;

@Injectable({
  providedIn: 'root'
})
export class StandingOrderService {

    constructor(private http: HttpClient) {}

    getStandingOrders(){
        return this.http.get<IStandingOrder[]>('http://uxp.softec.sk/training/api/standingOrder');
    }

    getStandingOrder(id: number){
        return this.http.get<IStandingOrderForm>(`http://uxp.softec.sk/training/api/standingOrder/${id}`);
    }
}
