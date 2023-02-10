import { Component, Input } from '@angular/core';
import { Savings } from 'src/app/interfaces/goals';

@Component({
  selector: 'app-savings-card',
  templateUrl: './savings-card.component.html',
  styleUrls: ['./savings-card.component.scss']
})
export class SavingsCardComponent {

  @Input() savings!: Savings;

  @Input() cardTitle: string;
  @Input() assignedTitle: string;
  @Input() unnasignedTitle: string;

  constructor() {
    this.cardTitle = '';
    this.assignedTitle = '';
    this.unnasignedTitle = '';
  }

}
