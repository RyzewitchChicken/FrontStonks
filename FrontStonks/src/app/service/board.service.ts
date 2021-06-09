import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board';



@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/clients';
  constructor(private http:HttpClient) { }

  GetBoards(accountId: Number): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.url}/${accountId}/boards`);
  }

  PostBoards(accountId:Number,board):Observable<Board>{
    return this.http.post<Board>(`${this.url}/${accountId}/boards`,board); 
    
  }
}
