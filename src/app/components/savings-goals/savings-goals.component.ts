import { Component, Input } from '@angular/core';
import { UserGoals } from 'src/app/interfaces/goals';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-savings-goals',
  templateUrl: './savings-goals.component.html',
  styleUrls: ['./savings-goals.component.scss']
})
export class SavingsGoalsComponent {

  @Input() userGoals!: UserGoals;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userGoals.goals, event.previousIndex, event.currentIndex);
  }
}
