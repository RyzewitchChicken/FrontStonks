import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../models/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/banks';
  constructor(private http:HttpClient) { }

  GetBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.url);
  }

}
