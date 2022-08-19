import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { IStandingOrder } from "../standing-order";
import { StandingOrderService } from "../standing-order.service";

@Component({
    selector: 'pm-standingOrders',
    templateUrl: './standingOrder-list.component.html',
    styleUrls: ['./standingOrder-list.component.scss']
})

export class StandingOrderListComponent implements OnInit{

    constructor(private standingOrderService: StandingOrderService){}

    orders: IStandingOrder[] = [];

    totalSum = 0;

    columnsToDisplay = ['date', 'info', 'amount'];

    ngOnInit(): void {
        this.standingOrderService.getStandingOrders().pipe(
            tap(data => {
                this.orders = data;
                this.totalSum = this.orders.reduce((acc, curr) => acc + curr.amount! , 0)
            })
        ).subscribe();
    }
}