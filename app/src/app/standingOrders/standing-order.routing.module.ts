import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StandingOrderListComponent } from './standing-order-list/standingOrder-list.component';
import { StandingOrderFormComponent } from './standing-order-form/standing-order-form.component';


const routes: Routes = [
    { path: 'standingOrders', component: StandingOrderListComponent },
    { path: 'form', component: StandingOrderFormComponent },
    { path: 'form/:id', component: StandingOrderFormComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class StandingOrderRoutingModule { }
