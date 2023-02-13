export interface User {
    name: string;
    savings: Savings;
}

export interface Savings {
    lastIncome: number;
    investmentIncomeRatio: number;
    accounts: Account[];
    goals: Goal[];
}

export interface Goal {
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
    bank?: string;
    type: string;
    balance: number;
}