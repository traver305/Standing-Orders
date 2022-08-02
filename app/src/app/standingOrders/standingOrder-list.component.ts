import { Component } from "@angular/core";

@Component({
    selector: 'pm-standingOrders',
    templateUrl: './standingOrder-list.component.html'
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
          "amount": 10.0124,
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
    columnsToDisplay = ['periodity', 'date'];
}