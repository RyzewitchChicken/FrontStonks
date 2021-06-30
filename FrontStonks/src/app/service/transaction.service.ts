import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // public accountId: number;
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/board';

  constructor(private http: HttpClient) { }

  getAllGastosByUserId(accountId: Number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.url}/${accountId}/transactions`);
  }
}
