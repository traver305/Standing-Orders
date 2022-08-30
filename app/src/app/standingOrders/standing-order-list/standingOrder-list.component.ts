import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { catchError, finalize, mergeMap, Observable, takeWhile, tap } from "rxjs";
import { AuthorizationService } from "src/app/authorization/authorization.service";
import { IStandingOrder } from "../standing-order";
import { StandingOrderService } from "../standing-order.service";

@Component({
    selector: 'pm-standingOrders',
    templateUrl: './standingOrder-list.component.html',
    styleUrls: ['./standingOrder-list.component.scss']
})

export class StandingOrderListComponent implements OnInit{

    constructor(
        private standingOrderService: StandingOrderService,
        private authorizationService: AuthorizationService){}

    orders: IStandingOrder[] = [];

    totalSum = 0;

    columnsToDisplay = ['date', 'info', 'amount'];

    deleteStandingOrder(id: number){
        this.authorizationService.authorization().pipe(
            takeWhile(token => !!token),
            mergeMap(token => {
                return this.standingOrderService.deleteStandingOrder(id, token);
            }),
            tap(() => this.loadStandingOrders())
        ).subscribe();
    }

    loadStandingOrders(){
        this.standingOrderService.getStandingOrders().pipe(
            tap(data => {
                this.orders = data;
                this.totalSum = this.orders.reduce((acc, curr) => acc + curr.amount , 0);
            })
        ).subscribe();
    }

    ngOnInit(): void {
        this.loadStandingOrders();
    }
}