import { Goal, User, Savings } from "../interfaces/user";

export class UserViewModel {
    id: number;
    name: string;
    goals: Goal[];
    savings: SavingsViewModel;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.goals = user.savings.goals;
        this.savings = new SavingsViewModel(user.savings)
    }
}

export class SavingsViewModel {
    currentObjectiveValue: number;
    monthlyObjectiveValue: number;
    currentAssigned: number;
    currentUnassigned: number;
    monthlyAssigned: number;
    monthlyUnassigned: number;

    constructor(savings: Savings) {
        this.currentObjectiveValue = savings.currentObjectiveValue;
        this.monthlyObjectiveValue = savings.monthlyObjectiveValue;
        this.currentAssigned = this.getCurrentAssigned(savings.goals);
        this.currentUnassigned = this.getCurrentUnassigned(savings.currentObjectiveValue, savings.goals);
        this.monthlyAssigned = this.getMonthlyAssigned(savings.goals);
        this.monthlyUnassigned = this.getMonthlyUnassigned(savings.monthlyObjectiveValue, savings.goals);
    }

    getCurrentAssigned = (goals: Goal[]) =>
        goals.reduce((sum, goal) => goal.markedAsCompleted ? sum : sum + goal.savedAmount, 0);

    getCurrentUnassigned = (currentObjectiveValue: number, goals: Goal[]) =>
        currentObjectiveValue - this.getCurrentAssigned(goals);

    getMonthlyAssigned = (goals: Goal[]) =>
        goals.reduce((sum, goal) => goal.markedAsCompleted ? sum : sum + goal.monthlyContribution, 0);

    getMonthlyUnassigned = (monthlyObjectiveValue: number, goals: Goal[]) =>
        monthlyObjectiveValue - this.getMonthlyAssigned(goals);
}
