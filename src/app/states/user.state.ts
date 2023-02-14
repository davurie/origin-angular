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

    user$!: Observable<User>;
    goal$!: Observable<Goal[]>;
    account$!: Observable<Account[]>;

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
        this.getPosts({ updateUser: true, updateAccounts: true, updateGoals: true });
    }

    getPosts({ updateUser = false, updateAccounts = false, updateGoals = false }) {
        updateUser && (this.user$ = this.userService.findUserById(1));
        updateAccounts && (this.account$ = this.accountService.findAccountsByUserId(1));
        updateGoals && (this.goal$ = this.goalService.findGoalsByUserId(1));

        combineLatest([this.user$, this.account$, this.goal$]).pipe(
            map(([user, accounts, goals]) => new UserViewModel(user, accounts, goals))
        ).subscribe(userVM => {
            console.log(userVM)
            this.userVM = userVM;
        });

    }
}