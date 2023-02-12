export interface User {
    id: number;
    name: string;
    savings: Savings;
}

export interface Savings {
    currentObjectiveValue: number;
    monthlyObjectiveValue: number;    
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
