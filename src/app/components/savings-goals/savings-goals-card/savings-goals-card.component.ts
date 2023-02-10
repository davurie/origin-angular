import { Component, Input } from '@angular/core';
import { faGripVertical, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Goal } from 'src/app/interfaces/goals';

@Component({
  selector: 'app-savings-goals-card',
  templateUrl: './savings-goals-card.component.html',
  styleUrls: ['./savings-goals-card.component.scss']
})
export class SavingsGoalsCardComponent {

  @Input() goal!: Goal;

  faGripVertical = faGripVertical;
  faEllipsisV = faEllipsisV;
}
