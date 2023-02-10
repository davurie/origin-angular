import { Component, Input } from '@angular/core';
import { UserGoals } from './interfaces/goals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() savingsCard!: UserGoals;

  constructor() {
    this.savingsCard = {
      currentSavings: {
        currentObjectiveValue: 81191.73,
        currentAssigned: 76190.48,
        currentUnassigned: 5001.25,
      },
      monthlySavings: {
        currentObjectiveValue: 1220.41,
        currentAssigned: 1190.48,
        currentUnassigned: 29.93,
      },
      goals: [
        {
          goalTitle: 'Buy a House',
          targetAmount: 80000.00,
          savedAmount: 56190.48,
          monthlyContribution: 1190.48,
          monthlyGoal: 1220.41,
          targetDate: new Date('01/01/2024'),
          completed: false,
          onTrack: true,
        },
        {
          goalTitle: 'Wedding',
          targetAmount: 20000.00,
          savedAmount: 20000.00,
          monthlyContribution: 0.00,
          monthlyGoal: 0.00,
          targetDate: new Date('04/01/2023'),
          completed: true,
          onTrack: true,
        },
      ],
    }
  }
}
