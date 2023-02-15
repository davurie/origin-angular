import { Component } from '@angular/core';

import { debounceTime } from 'rxjs/operators';

import { GoalsViewModel } from 'src/app/models/goals.model';
import { AlertService } from 'src/app/services/alert.service';
import { GoalService } from 'src/app/services/goal.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { UserState } from 'src/app/states/user.state';

@Component({
  selector: 'app-saving-goals-new',
  templateUrl: './saving-goals-new.component.html',
  styleUrls: ['./saving-goals-new.component.scss']
})
export class SavingGoalsNewComponent {

  goal: GoalsViewModel;

  constructor(
    private userState: UserState,
    private goalService: GoalService,
    private sidenavService: SidenavService,
    private alertService: AlertService) {

    this.goal = new GoalsViewModel();
  }

  handleAddNewGoal = () =>
    this.goalService.createNewGoal(this.goal)
      .pipe(debounceTime(2000))
      .subscribe({
        error: () => this.alertService.show('Ops! Something went wrong!', 'Dismiss', 'danger'),
        complete: () => {
          this.userState.getPosts();
          this.close();
          this.goal = new GoalsViewModel();
          this.alertService.show('Goal added successfuly!', 'Dismiss', 'success')
        }
      });

  close = () => this.sidenavService.toggle('');
}
