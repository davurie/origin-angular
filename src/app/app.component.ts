import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


import { map, } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

import { Account, Goal, User } from './interfaces/user';
import { UserViewModel } from './models/user.model';
import { AccountService } from './services/account.service';
import { GoalService } from './services/goal.service';
import { SidenavService } from './services/sidenav.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('drawer') public sidenav!: MatSidenav;

  faXmark = faXmark;

  userVM$!: Observable<UserViewModel>;
  user$!: Observable<User>;
  goal$!: Observable<Goal[]>;
  account$!: Observable<Account[]>;

  constructor(
    private sidenavService: SidenavService,
    private userService: UserService,
    private goalService: GoalService,
    private accountService: AccountService,
  ) {
    this.user$ = this.userService.findUserById(1);
    this.account$ = this.accountService.findAccountsByUserId(1);
    this.goal$ = this.goalService.findGoalsByUserId(1);

    this.userVM$ = combineLatest([this.user$, this.account$, this.goal$]).pipe(
      map(([user, accounts, goals]) => new UserViewModel(user, accounts, goals))
    );
  }

  getSidenavSlot = () => this.sidenavService.getSlot();

  closeSidenav = () => this.sidenavService.close();

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
