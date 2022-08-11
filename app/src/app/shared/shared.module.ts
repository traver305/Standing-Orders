import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "../material/material.module";
import { PeriodicityFormComponent } from "./periodicity/periodicity-form.component";

@NgModule({
    declarations: [
        PeriodicityFormComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    exports: [
        PeriodicityFormComponent
    ]
})
export class SharedModule{}