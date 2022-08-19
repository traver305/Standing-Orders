import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingOrderFormComponent } from './standingOrders/standing-order-form/standing-order-form.component';
import { StandingOrderListComponent } from './standingOrders/standing-order-list/standingOrder-list.component';

const routes: Routes = [
    { path: 'standingOrders', component: StandingOrderListComponent },
    { path: 'form', component: StandingOrderFormComponent },
    { path: 'form/:id', component: StandingOrderFormComponent},
    { path: '', redirectTo: '/standingOrders', pathMatch: 'full' },
    { path: '**', redirectTo: '/standingOrders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
