import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StandingOrderListComponent } from './standingOrders/standing-order-list/standingOrder-list.component';
import { IbanFormatPipe } from './pipes/iban-format.pipe';
import { StandingOrderFormComponent } from './standingOrders/standing-order-form/standing-order-form.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    StandingOrderListComponent,
    IbanFormatPipe,
    StandingOrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
