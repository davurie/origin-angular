import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Goal } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  findGoalsByUserId = (id: number): Observable<Goal[]> =>
    this.http.get<Goal[]>(`http://localhost:3000/goals/?userId=${id}`);

  createNewGoal = (goal: Goal): Observable<Goal> =>
    this.http.put<Goal>(`http://localhost:3000/goals`, { goal }, { headers: this.headers });
}