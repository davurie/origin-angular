import { Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, map, Observable, shareReplay } from 'rxjs';
import { Account, Goal, User } from '../interfaces/user';
import { UserViewModel } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { GoalService } from '../services/goal.service';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserState {

    user$: Observable<User> = this.userService.findUserById(1);
    account$: Observable<Account[]> = this.accountService.findAccountsByUserId(1);
    goal$: Observable<Goal[]> = this.goalService.findGoalsByUserId(1);

    private readonly _userVM: BehaviorSubject<UserViewModel> = new BehaviorSubject<UserViewModel>({} as UserViewModel);;

    readonly userVM$: Observable<UserViewModel> = this._userVM.asObservable().pipe(shareReplay(1));

    get userVM(): UserViewModel {
        return this._userVM.getValue();
    }

    set userVM(val: UserViewModel) {
        this._userVM.next(val);
    }

    constructor(
        private userService: UserService,
        private goalService: GoalService,
        private accountService: AccountService,
    ) {
        this.getPosts();
    }

    getPosts() {
        combineLatest([this.user$, this.account$, this.goal$]).pipe(
            map(([user, accounts, goals]) => new UserViewModel(user, accounts, goals))
        ).subscribe(userVM => {
            console.log(userVM)
            this.userVM = userVM;
        });

    }
}