import { Component, Input } from '@angular/core';
import { faGripVertical, faEllipsisV, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Goal } from 'src/app/interfaces/user';
import { GoalService } from 'src/app/services/goal.service';
import { UserState } from 'src/app/states/user.state';

@Component({
  selector: 'app-savings-goals-card',
  templateUrl: './savings-goals-card.component.html',
  styleUrls: ['./savings-goals-card.component.scss']
})
export class SavingsGoalsCardComponent {

  @Input() goal!: Goal;

  showMarkAsComplete: boolean;

  faGripVertical = faGripVertical;
  faEllipsisV = faEllipsisV;
  faCheck = faCheck;
  faXmark = faXmark;

  constructor(private goalService: GoalService, private userState: UserState) {
    this.showMarkAsComplete = false;
  }

  handleMarkAsComplete = () => this.goalService.markGoalAsComplete(this.goal).subscribe(
    {
      error: (e) => console.error(e),
      complete: () => this.userState.getPosts({ updateAccounts: true }) //This is ugly but its cool
    }
  );

  toggleViewMarkAsComplete = () => this.showMarkAsComplete = !this.showMarkAsComplete;
}
