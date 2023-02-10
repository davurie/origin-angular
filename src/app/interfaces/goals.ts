export interface UserGoals {
    currentSavings: Savings;
    monthlySavings: Savings;
    goals: Goal[];
    completedGoals: CompletedGoal[];
}

export interface Goal {
    goalTitle: string;
    targetAmount: number;
    savedAmount: number;
    monthlyContribution: number;
    monthlyGoal: number;
    targetDate: Date;
    completionDate?: Date;
    onTrack: boolean;
    goalReached: boolean;
    completed: boolean;
}

export interface Savings {
    currentObjectiveValue: number;
    currentAssigned: number;
    currentUnassigned: number;
}

export interface CompletedGoal {
    goalTitle: string;
    targetAmount: number;
    savedAmount: number;
    targetDate: Date;
    completionDate: Date;
}

