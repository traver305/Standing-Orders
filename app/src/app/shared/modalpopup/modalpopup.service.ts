import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConstantSymbols } from './modalpopup.component';

@Injectable({
  providedIn: 'root'
})
export class ModalpopupService {

    constructor(private http: HttpClient) { }


    getConstatnSymbols(){
        return this.http.get<IConstantSymbols[]>('api/code-table/constant-symbols');
    }
}
