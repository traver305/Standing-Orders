import { Component } from "@angular/core";

@Component({
    selector: 'pm-standingOrders',
    templateUrl: './standingOrder-list.component.html',
    styleUrls: ['./standingOrder-list.component.scss']
})

export class StandingOrderListComponent{
    orders: any[] = [
        {
          "standingOrderId": 4645,
          "amount": 10.0123,
          "name": "testing test",
          "accountNumber": "SK0000000000000000000123",
          "interval": "Týždenne",
          "nextRealizationDate": "2022-08-03T00:00:00+02:00"
        },
        {
          "standingOrderId": 4650,
          "amount": 10000.0124,
          "name": "testing test",
          "accountNumber": "SK0000000000000000000123",
          "interval": "Týždenne",
          "nextRealizationDate": "2022-08-03T00:00:00+02:00"
        },
        {
          "standingOrderId": 4651,
          "amount": 10.0124,
          "name": "testing test",
          "accountNumber": "SK0000000000000000000123",
          "interval": "Týždenne",
          "nextRealizationDate": "2022-08-03T00:00:00+02:00"
        }
    ];
    columnsToDisplay = ['date', 'info', 'amount'];

    sumOfAmount(): number {
      let sum = 0;
      for (let i = 0; i < this.orders.length; i++){
        sum += this.orders[i].amount;
      }
      return sum;
    }
}