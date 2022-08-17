import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "./material/material.module";
import { PeriodicityFormComponent } from "./periodicity/periodicity-form.component";

@NgModule({
    declarations: [
        PeriodicityFormComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        PeriodicityFormComponent
    ]
})
export class SharedModule{}