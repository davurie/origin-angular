import { Component, Input } from '@angular/core';
import { SavingsViewModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-savings-card',
  templateUrl: './savings-card.component.html',
  styleUrls: ['./savings-card.component.scss']
})
export class SavingsCardComponent {

  @Input() savings!: SavingsViewModel;

}
