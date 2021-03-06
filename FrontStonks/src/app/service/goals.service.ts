import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goals } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private url: string = 'https://finance-stonks-2021.herokuapp.com/api/clients';

  // clients/1/goals
  constructor(private http:HttpClient) { }

  getGoals(accountId: Number): Observable<Goals[]>{
    return this.http.get<Goals[]>(`${this.url}/${accountId}/goals`);
  }
  addGoals(goal,accountId: Number): Observable<Goals>{
    return this.http.post<Goals>(`${this.url}/${accountId}/goals`,goal);
  }
  deleteGoal(accountId: Number,goaldID: Number):Observable<Goals>{
    return this.http.delete<Goals>(`${this.url}/${accountId}/goals/${goaldID}`);
  }
  editGoal(accountID:Number,goaldID:Number,goal):Observable<Goals>{
    return this.http.put<Goals>(`${this.url}/${accountID}/goals/${goaldID}`,goal);
  }
  
}
