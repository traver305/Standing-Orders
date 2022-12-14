import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StandingOrderListComponent } from './standingOrders/standing-order-list/standingOrder-list.component';
import { IbanFormatPipe } from './shared/pipes/iban-format.pipe';
import { StandingOrderFormComponent } from './standingOrders/standing-order-form/standing-order-form.component';
import { SharedModule } from './shared/shared.module';
import { StandingOrderModule } from './standingOrders/standing-order.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { CommonInterceptor } from './http-interceptors/common.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    StandingOrderModule,
    AuthorizationModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
