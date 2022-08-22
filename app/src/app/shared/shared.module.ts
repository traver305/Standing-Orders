import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "./material/material.module";
import { PeriodicityFormComponent } from "./periodicity/periodicity-form.component";
import { ModalpopupComponent } from './modalpopup/modalpopup.component';

@NgModule({
    declarations: [
        PeriodicityFormComponent,
        ModalpopupComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        PeriodicityFormComponent,
        ModalpopupComponent
    ]
})
export class SharedModule{}