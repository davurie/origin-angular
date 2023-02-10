import { Component, Input } from '@angular/core';
import { CompletedGoal } from 'src/app/interfaces/goals';

@Component({
  selector: 'app-savings-goals-completed',
  templateUrl: './savings-goals-completed.component.html',
  styleUrls: ['./savings-goals-completed.component.css']
})
export class SavingsGoalsCompletedComponent {

  @Input() goal!: CompletedGoal;

}
