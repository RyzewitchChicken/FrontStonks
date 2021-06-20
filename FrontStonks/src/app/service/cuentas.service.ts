import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuentas } from '../models/cuentas';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/board';
  constructor(private http:HttpClient) { }

  GetAccount(boardId:Number): Observable<Cuentas[]> {
    return this.http.get<Cuentas[]>(`${this.url}/${boardId}/accounts`);
  }
  PostAccount(account, boardId:Number):Observable<Cuentas>{
    return this.http.post<Cuentas>(`${this.url}/${boardId}/accounts`,account); 
    
  }

}
