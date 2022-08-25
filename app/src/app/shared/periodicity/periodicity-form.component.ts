import { Component, Input, OnInit, Self } from "@angular/core";
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from "@angular/forms";
import { tap } from "rxjs";

export interface ValueTextType {
    value: number,
    text: string
}

const intervalDaily = 1;
const intervalWeekly = 2;
const intervalMonthly = 3;

export interface IPeriodicityForm {
    intervalId? : number | null,
    intervalSpecification? : number | null
}

@Component({
    selector: 'periodicity-form',
    templateUrl: './periodicity-form.component.html',
    styleUrls: ['./periodicity-form.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: PeriodicityFormComponent
        },
        {
          provide: NG_VALIDATORS,
          multi: true,
          useExisting: PeriodicityFormComponent
        }
    ]
})
export class PeriodicityFormComponent implements ControlValueAccessor, OnInit{

    @Input() markTouched: boolean = false;

    intervals: ValueTextType[] = [
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

    intervalSpecification: ValueTextType[]= [];

    constructor(
        private fb: FormBuilder
        ){}

    periodicity = this.fb.group({
        intervalId: this.fb.control<number | null>(null, {validators: Validators.required}),
        intervalSpecification: this.fb.control<number | null>({value: null, disabled: true}, {nonNullable: true, validators: Validators.required})   
    })

    loadDays(){
        this.intervalSpecification = [
            {value: 1, text: 'Pondelok'},
            {value: 2, text: 'Utorok'},
            {value: 3, text: 'Streda'},
            {value: 4, text: 'Štvrtok'},
            {value: 5, text: 'Piatok'},
            {value: 6, text: 'Sobota'},
            {value: 7, text: 'Nedeľa'},
        ]
    }

    loadNumbers(){
        this.intervalSpecification = Array.from({length: 31}, (_, i) => {
            return {
                value: i+1,
                text: `${i+1}`
            };
        });
    }
    
    changePeriodicity(){
        console.log(this.markTouched);
        if(this.markTouched){
            console.log('AS TOUCHED');
            this.periodicity.markAllAsTouched();
        }
        if(this.periodicity.value.intervalId === intervalDaily){
            this.periodicity.controls.intervalSpecification.setValue(0, {emitEvent: false})
            this.periodicity.controls.intervalSpecification.disable();
            this.periodicity.controls.intervalSpecification.reset();
        }
        if(this.periodicity.value.intervalId === intervalWeekly){
            this.periodicity.controls.intervalSpecification.setValue(null, {emitEvent: false})
            this.periodicity.controls.intervalSpecification.enable();
            this.loadDays();
        }
        if(this.periodicity.value.intervalId === intervalMonthly){
            this.periodicity.controls.intervalSpecification.setValue(null, {emitEvent: false})
            this.periodicity.controls.intervalSpecification.enable();
            this.loadNumbers();
        }
    }

    writeValue(obj: any): void {
        if (obj) {
            this.periodicity.setValue(obj, {emitEvent: false});
            this.changePeriodicity();
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
            tap((val) => this.onChange(this.periodicity.getRawValue())),
        ).subscribe();
    }

    validate(control: AbstractControl): ValidationErrors | null {
        console.log('validate');
        // console.log(this.markTouched);
        
        this.periodicity.updateValueAndValidity({onlySelf: true});
        if(this.periodicity.invalid){
            return { intervalSelectError: true };
        }
        return null;
        // let isNotValid = true;
        // if(this.periodicity.value.intervalId === null){
        //     isNotValid = false;
        // }
        // else if(this.periodicity.value.intervalId !== intervalDaily && this.periodicity.value.intervalSpecification === 0){
        //     isNotValid = false;
        // }
        // return isNotValid && {
        //   invalid: true
        // }
    }



    get controls(){
        return this.periodicity.controls;
    }
}