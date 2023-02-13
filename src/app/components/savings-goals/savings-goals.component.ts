import { Component, Input, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Goal } from 'src/app/interfaces/user';
import { SavingsViewModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-savings-goals',
  templateUrl: './savings-goals.component.html',
  styleUrls: ['./savings-goals.component.scss']
})
export class SavingsGoalsComponent {

  @Input() goals!: Goal[];
  @Input() savings!: SavingsViewModel;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.goals, event.previousIndex, event.currentIndex);
  }
}
