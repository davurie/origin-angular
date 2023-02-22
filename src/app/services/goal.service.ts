import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Goal } from '../interfaces/user';
import { GoalsViewModel } from '../models/goals.model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  findGoalsByUserId = (id: number): Observable<Goal[]> =>
    this.http.get<Goal[]>(`http://localhost:3000/goals/?userId=${id}`);

  markGoalAsComplete = (goal: Goal): Observable<void> =>
    this.http.patch<void>(`http://localhost:3000/goals/${goal.id}`, { markedAsCompleted: true }, { headers: this.headers });

  createNewGoal = (goal: GoalsViewModel): Observable<Goal> =>
    this.http.post<Goal>(`http://localhost:3000/goals`, goal);
}