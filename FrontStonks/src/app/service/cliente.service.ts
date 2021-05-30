import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/clients'
  constructor(private http: HttpClient) { }
  private client = new BehaviorSubject<Cliente>(new Cliente());
  
  public share = this.client.asObservable();

  getCliente(client:Cliente):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }
  
}
