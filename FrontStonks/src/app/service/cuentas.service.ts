import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuentas } from '../models/cuentas';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/board';
  private url2: string = 'https://finance-stonks-2021.herokuapp.com/api/account';
  constructor(private http:HttpClient) { }

  GetAccount(boardId:Number): Observable<Cuentas[]> {
    return this.http.get<Cuentas[]>(`${this.url}/${boardId}/accounts`);
  }
  PostAccount(account, boardId:string, bankId:string):Observable<Cuentas>{
    return this.http.post<Cuentas>(`${this.url}/${boardId}/account?bank=${bankId}`,account); 
    
  }
  DeleteAccount(boardID:Number):Observable<Cuentas> {
    return this.http.delete<Cuentas>(`${this.url2}/${boardID}`);
  }

}
