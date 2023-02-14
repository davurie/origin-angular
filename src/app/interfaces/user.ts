export interface User {
    id: number;
    password: string;
    fullname: string;
    savings: Savings;
}

export interface Savings {
    userId: number;
    lastIncome: number;
    fixedExpenses?: FixedExpenses[];
    investmentIncomeRatio: number; //remove after implementing fixed expenses
}

export interface Goal {
    id: number;
    savedAmount: number;
    monthlyContribution: number;
    monthlyGoal: number;
    completionDate: string;
    onTrack: boolean;
    goalReached: boolean;
    markedAsCompleted: boolean;
    userId: number;
    goalTitle: string;
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

export interface FixedExpenses {
    name: string;
    value: number;
}