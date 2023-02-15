import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Goal } from 'src/app/interfaces/user';
import { SavingsViewModel } from 'src/app/models/savings.model';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-savings-goals',
  templateUrl: './savings-goals.component.html',
  styleUrls: ['./savings-goals.component.scss']
})
export class SavingsGoalsComponent {

  @Input() goals!: Goal[];
  @Input() savings!: SavingsViewModel;

  constructor(private sidenavService: SidenavService) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.goals, event.previousIndex, event.currentIndex);
  }

  openNewGoalDrawer = () => this.sidenavService.toggle('newGoal');
}
