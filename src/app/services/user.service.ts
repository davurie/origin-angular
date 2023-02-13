import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  findUserById = (id: number): Observable<User> => this.http.get<User>(`http://localhost:3000/users/${id}`);
}