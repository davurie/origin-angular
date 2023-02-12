import { Component, Input } from '@angular/core';
import { Goal } from 'src/app/interfaces/user';

@Component({
  selector: 'app-savings-goals-completed',
  templateUrl: './savings-goals-completed.component.html',
  styleUrls: ['./savings-goals-completed.component.scss']
})
export class SavingsGoalsCompletedComponent {

  @Input() goal!: Goal;

}
