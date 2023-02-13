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
      name: 'Jill',
      savings: {
        lastIncome: 6102.05,
        investmentIncomeRatio: 0.2,
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
        ],
        accounts: [
          {
            balance: 43200,
            bank: "Chase",
            type: "Plaid Money Market (4444)"
          },
          {
            balance: 23631.98,
            bank: "Vanguard",
            type: "Plaid 401k (6666)"
          },
          {
            balance: 12748.99,
            bank: "Origin",
            type: "Origin Account (5681)"
          },
          {
            balance: 320.76,
            bank: "Vanguard",
            type: "Plaid IRA (5555)"
          },
          {
            balance: 210,
            bank: "Chase",
            type: "Plaid Saving (1111)"
          },
          {
            balance: 210,
            type: "Plaid Saving"
          },
          {
            balance: 210,
            bank: "Wells Fargo",
            type: "Plaid Saving (1111)"
          },
          {
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
            balance: 110,
            bank: "Chase",
            type: "Plaid Checking (0000)"
          },
          {
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
