import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { IStandingOrder } from "../standingOrders/standingOrder;

@Injectable({
  providedIn: 'root'
})
export class StandingOrderService {

    constructor(private http: HttpClient) {}

    getStandingOrders(){
        return this.http.get('http://uxp.softec.sk/training/api/standingOrder');
    }

    getStandingOrder(id: number){
        return this.http.get(`http://uxp.softec.sk/training/api/standingOrder/${id}`);
    }
}
