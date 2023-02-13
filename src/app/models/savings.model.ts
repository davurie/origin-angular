import { Account, Goal, Savings } from "../interfaces/user";

export class SavingsViewModel {
    currentObjectiveValue: number;
    monthlyObjectiveValue: number;
    currentAssigned: number;
    monthlyAssigned: number;
    currentUnassigned: number;
    monthlyUnassigned: number;

    constructor(savings: Savings, accounts: Account[], goals: Goal[]) {
        this.currentObjectiveValue = this.getObjectiveValue(accounts);
        this.monthlyObjectiveValue = savings.lastIncome * savings.investmentIncomeRatio;
        this.currentAssigned = this.getCurrentAssigned(goals);
        this.monthlyAssigned = this.getMonthlyAssigned(goals);
        this.currentUnassigned = this.getCurrentUnassigned(this.currentObjectiveValue, goals);
        this.monthlyUnassigned = this.getMonthlyUnassigned(this.monthlyObjectiveValue, goals);
    }

    getObjectiveValue = (accounts: Account[]) => accounts.reduce((sum, account) => sum + account.balance, 0);

    getCurrentAssigned = (goals: Goal[]) =>
        goals.reduce((sum, goal) => goal.markedAsCompleted ? sum : sum + goal.savedAmount!, 0);

    getCurrentUnassigned = (currentObjectiveValue: number, goals: Goal[]) =>
        currentObjectiveValue - this.getCurrentAssigned(goals);

    getMonthlyAssigned = (goals: Goal[]) =>
        goals.reduce((sum, goal) => goal.markedAsCompleted ? sum : sum + goal.monthlyContribution!, 0);

    getMonthlyUnassigned = (monthlyObjectiveValue: number, goals: Goal[]) =>
        monthlyObjectiveValue - this.getMonthlyAssigned(goals);
}