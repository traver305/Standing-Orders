import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StandingOrderListComponent } from './standingOrders/standingOrder-list.component';
import { MaterialModule } from './material/material.module';
import { IbanFormatPipe } from './pipes/iban-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StandingOrderListComponent,
    IbanFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
