import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { ModalpopupService } from './modalpopup.service';

export interface IConstantSymbols {
    value: string,
    text: string
}

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss']
})
export class ModalpopupComponent implements OnInit {

    constantSymbols: IConstantSymbols[] = [];
    columnsToDisplay = ['value', 'text'];

    constructor(private modalpopupService: ModalpopupService, private matDialogRef: MatDialogRef<ModalpopupComponent>) { }

    chooseConst(element : IConstantSymbols){
        this.matDialogRef.close(element.value);
    }

    ngOnInit(): void {
        this.modalpopupService.getConstatnSymbols().pipe(
            tap(data => {this.constantSymbols = data;})
        ).subscribe();
    }

}
