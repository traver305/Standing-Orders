import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StandingOrderListComponent } from './standingOrders/standingOrder-list.component';
import { IbanFormatPipe } from './pipes/iban-format.pipe';
import { StandingOrderFormComponent } from './standingOrders/standing-order-form/standing-order-form.component';


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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
