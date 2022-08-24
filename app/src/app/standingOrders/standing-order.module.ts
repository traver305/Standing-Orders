import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingOrderListComponent } from './standing-order-list/standingOrder-list.component';
import { StandingOrderFormComponent } from './standing-order-form/standing-order-form.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StandingOrderRoutingModule } from './standing-order.routing.module';



@NgModule({
    declarations: [
        StandingOrderListComponent,
        StandingOrderFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StandingOrderRoutingModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        StandingOrderListComponent,
        StandingOrderFormComponent
    ]
})
export class StandingOrderModule { }
