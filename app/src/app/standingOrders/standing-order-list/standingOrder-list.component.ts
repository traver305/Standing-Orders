import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IStandingOrder } from "../standingOrder";
import { StandingOrderService } from "src/app/services/standing-order.service";

@Component({
    selector: 'pm-standingOrders',
    templateUrl: './standingOrder-list.component.html',
    styleUrls: ['./standingOrder-list.component.scss']
})

export class StandingOrderListComponent implements OnInit{

    constructor(private standingOrderService: StandingOrderService){}

    orders!: any;

    columnsToDisplay = ['date', 'info', 'amount'];

    sumOfAmount(): number {
      let sum = 0;
      for (let i = 0; i < this.orders.length; i++){
        sum += this.orders[i].amount;
      }
      return sum;
    }

    ngOnInit(): void {
        this.standingOrderService.getStandingOrders().subscribe(data => {
            this.orders = data;
        })
    }
}