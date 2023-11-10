import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovsService {

  constructor( private _http: HttpClient) {}

    addMov(data: any): Observable <any> {
      return this._http.post('http://localhost:3000/movimentos', data);
    }

    getMovList(): Observable <any>{
      return this._http.get('http://localhost:3000/movimentos');
    }

    getIdList(): Observable <any>{
      return this._http.get('http://localhost:3000/loginid');
    }
  
  
}
