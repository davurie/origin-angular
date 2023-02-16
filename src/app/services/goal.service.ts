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
    this.http.get<Goal[]>(`https://json-server-davurie.vercel.app/goals/?userId=${id}`);

  markGoalAsComplete = (goal: Goal): Observable<void> =>
    this.http.patch<void>(`https://json-server-davurie.vercel.app/goals/${goal.id}`, { markedAsCompleted: true }, { headers: this.headers });

  createNewGoal = (goal: GoalsViewModel): Observable<Goal> =>
    this.http.post<Goal>(`https://json-server-davurie.vercel.app/goals`, goal);
}