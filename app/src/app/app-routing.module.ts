import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'orders', loadChildren: () => import('./standingOrders/standing-order.module').then(x => x.StandingOrderModule) },
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: '**', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
