import { Component, Input } from '@angular/core';
import { faGripVertical, faEllipsisV, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Goal } from 'src/app/interfaces/user';

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

  constructor() {
    this.showMarkAsComplete = false;
  }

  handleMarkAsComplete = () => this.goal.markedAsCompleted = false;

  toggleViewMarkAsComplete = () => this.showMarkAsComplete = !this.showMarkAsComplete;

}
