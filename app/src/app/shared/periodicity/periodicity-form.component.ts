import { Component, Input, OnInit, Self, SimpleChanges } from "@angular/core";
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
        intervalSpecification: this.fb.control<number | null>({value: null, disabled: true}, {validators: Validators.required})   
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
    
    changePeriodicity(intervalId: number | null){
        if(intervalId === intervalDaily){
            this.periodicity.controls.intervalSpecification.setValue(0, {emitEvent:false});
            this.periodicity.controls.intervalSpecification.disable({emitEvent:false});
        }
        if(intervalId === intervalWeekly){
            this.periodicity.controls.intervalSpecification.setValue(null, {emitEvent:false});
            this.periodicity.controls.intervalSpecification.enable({emitEvent:false});
            this.loadDays();
        }
        if(intervalId === intervalMonthly){
            this.periodicity.controls.intervalSpecification.setValue(null, {emitEvent:false});
            this.periodicity.controls.intervalSpecification.enable({emitEvent:false});
            this.loadNumbers();
        }
    }

    writeValue(obj: any): void {
        if (obj) {
            this.periodicity.patchValue(obj);
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
        this.periodicity.controls.intervalId.valueChanges.pipe(
            tap((intervalId) => this.changePeriodicity(intervalId)),
            tap(() => this.onChange(this.periodicity.getRawValue()))
        ).subscribe();

        this.periodicity.controls.intervalSpecification.valueChanges.pipe(
            tap(() => this.onChange(this.periodicity.getRawValue()))
        ).subscribe();
    }

    validate(control: AbstractControl): ValidationErrors | null {  
        this.periodicity.updateValueAndValidity({emitEvent: false});
        if(this.periodicity.invalid){
            return { intervalSelectError: true };
        }
        return null;
    }

    ngOnChanges(changes: SimpleChanges) {
        const markT = changes;
        if(markT && this.markTouched){
            this.periodicity.markAllAsTouched();
        }
      }

    get controls(){
        return this.periodicity.controls;
    }
}