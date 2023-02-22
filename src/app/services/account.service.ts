import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Account } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  headers = { "Content-Type": "application/json" };

  constructor(private http: HttpClient) { }

  findAccountsByUserId = (id: number): Observable<Account[]> =>
    this.http.get<Account[]>(`http://localhost:3000/accounts/?userId=${id}`);

  addAcount = (account: Account): Observable<Account> =>
    this.http.post<Account>(`http://localhost:3000/accounts`, account);
}
