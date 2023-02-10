import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  @Input() targetAmount: number;
  @Input() savedAmount: number;
  @Input() goalReached: boolean;

  constructor() {
    this.targetAmount = 0;
    this.savedAmount = 0;
    this.goalReached = false;
  }

}
