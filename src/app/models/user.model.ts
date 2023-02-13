import { Goal, User, Savings, Account } from "../interfaces/user";

export class UserViewModel {
    name: string;
    goals: Goal[];
    savings: SavingsViewModel;

    constructor(user: User) {
        this.name = user.fullname;
        this.goals = user.savings.goals;
        this.savings = new SavingsViewModel(user.savings)
    }
}

export class SavingsViewModel {
    currentObjectiveValue: number;
    monthlyObjectiveValue: number;
    currentAssigned: number;
    monthlyAssigned: number;
    currentUnassigned: number;
    monthlyUnassigned: number;
    accounts: Account[];

    constructor(savings: Savings) {
        this.currentObjectiveValue = this.getObjectiveValue(savings.accounts);
        this.monthlyObjectiveValue = savings.lastIncome * savings.investmentIncomeRatio;
        this.currentAssigned = this.getCurrentAssigned(savings.goals);
        this.monthlyAssigned = this.getMonthlyAssigned(savings.goals);
        this.currentUnassigned = this.getCurrentUnassigned(this.currentObjectiveValue, savings.goals);
        this.monthlyUnassigned = this.getMonthlyUnassigned(this.monthlyObjectiveValue, savings.goals);
        this.accounts = savings.accounts;
    }

    getObjectiveValue = (accounts: Account[]) => accounts.reduce((sum, account) => sum + account.balance, 0);

    getCurrentAssigned = (goals: Goal[]) =>
        goals.reduce((sum, goal) => goal.markedAsCompleted ? sum : sum + goal.savedAmount, 0);

    getCurrentUnassigned = (currentObjectiveValue: number, goals: Goal[]) =>
        currentObjectiveValue - this.getCurrentAssigned(goals);

    getMonthlyAssigned = (goals: Goal[]) =>
        goals.reduce((sum, goal) => goal.markedAsCompleted ? sum : sum + goal.monthlyContribution, 0);

    getMonthlyUnassigned = (monthlyObjectiveValue: number, goals: Goal[]) =>
        monthlyObjectiveValue - this.getMonthlyAssigned(goals);
}
