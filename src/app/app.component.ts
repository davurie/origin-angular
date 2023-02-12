import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { UserViewModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User
  userViewModel: UserViewModel;

  hasBackDrop: boolean = true;

  constructor() {
    this.user = {
      id: 1,
      name: 'Jill',
      savings: {
        currentObjectiveValue: 81191.73,
        monthlyObjectiveValue: 1220.41,
        goals: [
          {
            goalTitle: 'Buy a House',
            targetAmount: 80000.00,
            savedAmount: 56190.48,
            monthlyContribution: 1190.48,
            monthlyGoal: 1220.41,
            targetDate: '01/01/2024',
            onTrack: true,
            markedAsCompleted: false,
            goalReached: false,
          },
          {
            goalTitle: 'Wedding',
            targetAmount: 20000.00,
            savedAmount: 20000.00,
            monthlyContribution: 0.00,
            monthlyGoal: 0.00,
            targetDate: '04/01/2023',
            onTrack: true,
            markedAsCompleted: false,
            goalReached: true,
          },
          {
            goalTitle: 'Office Expansion',
            targetAmount: 150000,
            savedAmount: 150000,
            monthlyContribution: 0.00,
            monthlyGoal: 0.00,
            targetDate: '08/17/2022',
            completionDate: '08/17/2022',
            onTrack: true,
            markedAsCompleted: true,
            goalReached: true,
          },
          {
            goalTitle: 'Buy a new Car',
            targetAmount: 60000,
            savedAmount: 60000,
            monthlyContribution: 0.00,
            monthlyGoal: 0.00,
            targetDate: '05/25/2022',
            completionDate: '05/25/2022',
            onTrack: true,
            markedAsCompleted: true,
            goalReached: true,
          },
          {
            goalTitle: 'Trip',
            targetAmount: 24000,
            savedAmount: 24000,
            monthlyContribution: 0.00,
            monthlyGoal: 0.00,
            targetDate: '11/04/2021',
            completionDate: '11/04/2021',
            onTrack: true,
            markedAsCompleted: true,
            goalReached: true,
          },
          {
            goalTitle: 'Buy a Notebook',
            targetAmount: 2500,
            savedAmount: 2500,
            monthlyContribution: 0.00,
            monthlyGoal: 0.00,
            targetDate: '04/02/2021',
            completionDate: '04/02/2021',
            onTrack: true,
            markedAsCompleted: true,
            goalReached: true,
          },
        ]
      }
    }

    this.userViewModel = new UserViewModel(this.user);
  }
}
