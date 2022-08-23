import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    constructor(private http: HttpClient) { }

    getGridCard(){
        return this.http.get<Number>('api/grid-card/init');
    }
}
