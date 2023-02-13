export interface User {
    id: number;
    password: string;
    fullname: string;
    savings: Savings;
}

export interface Savings {
    userId: number;
    lastIncome: number;
    investmentIncomeRatio: number;
    accounts: Account[];
    goals: Goal[];
}

export interface Goal {
    id: number;
    userId: number;
    goalTitle: string;
    targetAmount: number;
    savedAmount: number;
    monthlyContribution: number;
    monthlyGoal: number;
    targetDate: string;
    completionDate?: string;
    onTrack: boolean;
    goalReached: boolean;
    markedAsCompleted: boolean;
}

export interface Account {
    id: number;
    userId: number;
    bank?: string;
    type: string;
    balance: number;
}