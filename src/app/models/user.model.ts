import { Goal, User, Account } from "../interfaces/user";
import { SavingsViewModel } from "./savings.model";

export class UserViewModel {
    name: string;
    goals: Goal[];
    accounts: Account[];
    savings: SavingsViewModel;

    constructor(user: User, accounts: Account[], goals: Goal[]) {
        this.name = user.fullname;
        this.goals = goals;
        this.savings = new SavingsViewModel(user.savings, accounts, goals)
        this.accounts = accounts;
    }
}

