export interface UserGoals {
    currentSavings: Savings;
    monthlySavings: Savings;
    goals: Goal[];
}

export interface Goal {
    goalTitle: string;
    targetAmount: number;
    savedAmount: number;
    monthlyContribution: number;
    monthlyGoal: number;
    targetDate: Date;
    completed: boolean;
    onTrack: boolean;
}

export interface Savings {
    currentObjectiveValue: number;
    currentAssigned: number;
    currentUnassigned: number;
}

