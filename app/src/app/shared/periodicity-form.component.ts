import { Component, OnInit } from "@angular/core";
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validator } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: 'periodicity-form',
    templateUrl: './periodicity-form.component.html',
    styleUrls: ['./periodicity-form.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: PeriodicityFormComponent
        }
    ]
})


export class PeriodicityFormComponent implements ControlValueAccessor{

    intervals: any[] = [
        {
            "value": 1,
            "text": "Denne"
        },
        {
            "value": 2,
            "text": "Týždenne"
        },
        {
            "value": 3,
            "text": "Mesačne"
        }
    ];

    intervalSpecification: any[]= [];

    disableSpec = true;

    constructor(private fb: FormBuilder){}

    periodicity: FormGroup = this.fb.group({
        period: new FormControl<number|null>(null),
        specific: new FormControl('')
    })

    loadDays(){
        this.intervalSpecification = [
            'Pondelok',
            'Utorok',
            'Streda',
            'Štvrtok',
            'Piatok',
            'Sobota',
            'Nedeľa'
        ]
    }

    loadNumbers(){
        this.intervalSpecification = Array.from({length: 31}, (_, i) => i + 1);
    }

    changePeriodicity(){
        if(this.periodicity.value.period === 1){
            console.log('je to 1111111111111111');
            this.disableSpec = true;
        }
        if(this.periodicity.value.period === 2){
            console.log('je to 222222222222222222222');
            this.disableSpec = false;
            this.loadDays();
        }
        if(this.periodicity.value.period === 3){
            console.log('je to 3333333333333333');
            this.disableSpec = false;
            this.loadNumbers();
        }
    }

    // writeValue(value: any): void {
    //     if (value){
    //         this.periodicity.setValue(value, {emitEvent: false})
    //     }
    // }

    // registerOnChange(onChange: any): void {
    //     const sub = this.periodicity.valueChanges.subscribe(onChange);
    //     this.o
    // }

    writeValue(obj: any): void {
        if (obj) {
            this.periodicity.setValue(obj, {emitEvent: false});
        }
    }

    onTouched: Function = () => {};

    onChangeSubs: Subscription[] = [];

    registerOnTouched(onTouched: Function) {
        this.onTouched = onTouched;
    }

    registerOnChange(onChange: any) {
        const sub = this.periodicity.valueChanges.subscribe(onChange);
        this.onChangeSubs.push(sub);
    }
}