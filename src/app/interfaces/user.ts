export interface User {
    id: number;
    fullname: string;
    savings: Savings;
}

export interface Savings {
    userId: number;
    lastIncome: number;
    fixedExpenses: FixedExpense[];
}

export interface Goal {
    id?: number;
    userId: number;
    savedAmount: number;
    monthlyContribution: number;
    completionDate: string;
    onTrack: boolean;
    goalReached: boolean;
    markedAsCompleted: boolean;
    title: string;
    targetAmount: number;
    targetDate: string;
}

export interface Account {
    id?: number;
    bank?: string;
    lastDigits: string;
    type: string;
    balance: number;
    userId: number;
}

export interface FixedExpense {
    name: string;
    value: number;
}