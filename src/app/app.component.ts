import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


import { User } from './interfaces/user';
import { UserViewModel } from './models/user.model';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('drawer') public sidenav!: MatSidenav;

  faXmark = faXmark;

  user: User
  userViewModel: UserViewModel;

  constructor(private sidenavService: SidenavService) {
    this.user = {
      id: 1,
      password: '123',
      fullname: 'Jill',
      savings: {
        userId: 1,
        lastIncome: 6102.05,
        investmentIncomeRatio: 0.2,
        goals: [
          {
            id: 1,
            goalTitle: 'Buy a House',
            targetAmount: 80000.00,
            savedAmount: 56190.48,
            monthlyContribution: 1190.48,
            monthlyGoal: 1220.41,
            targetDate: '01/01/2024',
            onTrack: true,
            markedAsCompleted: false,
            goalReached: false,
            userId: 1,
          },
          {
            id: 2,
            goalTitle: 'Wedding',
            targetAmount: 20000.00,
            savedAmount: 20000.00,
            monthlyContribution: 0.00,
            monthlyGoal: 0.00,
            targetDate: '04/01/2023',
            onTrack: true,
            markedAsCompleted: false,
            goalReached: true,
            userId: 1,
          },
          {
            id: 3,
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
            userId: 1,
          },
          {
            id: 4,
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
            userId: 1,
          },
          {
            id: 5,
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
            userId: 1,
          },
          {
            id: 6,
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
            userId: 1,
          },
        ],
        accounts: [
          {
            id: 1,
            userId: 1,
            balance: 43200,
            bank: "Chase",
            type: "Plaid Money Market (4444)"
          },
          {
            id: 2,
            userId: 1,
            balance: 23631.98,
            bank: "Vanguard",
            type: "Plaid 401k (6666)"
          },
          {
            id: 3,
            userId: 1,
            balance: 12748.99,
            bank: "Origin",
            type: "Origin Account (5681)"
          },
          {
            id: 4,
            userId: 1,
            balance: 320.76,
            bank: "Vanguard",
            type: "Plaid IRA (5555)"
          },
          {
            id: 5,
            userId: 1,
            balance: 210,
            bank: "Chase",
            type: "Plaid Saving (1111)"
          },
          {
            id: 6,
            userId: 1,
            balance: 210,
            type: "Plaid Saving"
          },
          {
            id: 7,
            userId: 1,
            balance: 210,
            bank: "Wells Fargo",
            type: "Plaid Saving (1111)"
          },
          {
            id: 8,
            userId: 1,
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            id: 9,
            userId: 1,
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            id: 10,
            userId: 1,
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            id: 11,
            userId: 1,
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            id: 12,
            userId: 1,
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            id: 13,
            userId: 1,
            balance: 110,
            bank: "Wells Fargo",
            type: "Plaid Checking (0000)"
          }
        ]
      }
    }

    this.userViewModel = new UserViewModel(this.user);
  }

  getSidenavSlot = () => this.sidenavService.getSlot();

  closeSidenav = () => this.sidenavService.close();

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
