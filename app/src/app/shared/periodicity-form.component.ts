import { Component, OnInit } from "@angular/core";
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from "@angular/forms";
import { tap } from "rxjs";

export interface ValueTextType {
    value: string,
    text: string
}

const intervalDaily = '1';
const intervalWeekly = '2';
const intervalMonthly = '3';

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
export class PeriodicityFormComponent implements ControlValueAccessor, OnInit{

    intervals: ValueTextType[] = [
        {
            "value": '1',
            "text": "Denne"
        },
        {
            "value": '2',
            "text": "Týždenne"
        },
        {
            "value": '3',
            "text": "Mesačne"
        }
    ];

    intervalSpecification: ValueTextType[]= [];

    constructor(private fb: FormBuilder){}

    periodicity = this.fb.group({
        period: [''],
        specific: [{value: '', disabled: true}]         
    })

    loadDays(){
        this.intervalSpecification = [
            {value: '1', text: 'Pondelok'},
            {value: '2', text: 'Utorok'},
            {value: '3', text: 'Streda'},
            {value: '4', text: 'Štvrtok'},
            {value: '5', text: 'Piatok'},
            {value: '6', text: 'Sobota'},
            {value: '7', text: 'Nedeľa'},
        ]
    }

    loadNumbers(){
        this.intervalSpecification = Array.from({length: 31}, (_, i) => {
            return {
                value: `${i+1}`,
                text: `${i+1}`
            };
        });
    }
    
    changePeriodicity(){
        if(this.periodicity.value.period === intervalDaily){
            this.periodicity.controls.specific.disable();
            this.periodicity.controls.specific.reset();
        }
        if(this.periodicity.value.period === intervalWeekly){
            this.periodicity.controls.specific.enable();
            this.loadDays();
        }
        if(this.periodicity.value.period === intervalMonthly){
            this.periodicity.controls.specific.enable();
            this.loadNumbers();
        }
    }

    writeValue(obj: any): void {
        if (obj) {
            this.periodicity.setValue(obj, {emitEvent: false});
        }
    }

    onTouched: Function = () => {};
    onChange = (val: any) => {};

    registerOnTouched(onTouched: Function) {
        this.onTouched = onTouched;
    }

    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    ngOnInit(): void {
        this.periodicity.valueChanges.pipe(
            tap((val) => this.onChange(val)),
        ).subscribe();
    }
}