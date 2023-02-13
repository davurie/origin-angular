import { Component, Input } from '@angular/core';
import { SavingsViewModel } from 'src/app/models/user.model';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-savings-card',
  templateUrl: './savings-card.component.html',
  styleUrls: ['./savings-card.component.scss']
})
export class SavingsCardComponent {

  @Input() savings!: SavingsViewModel;

  constructor(
    private sidenav: SidenavService) { }

  toggleRightSidenav(slot: string) {
    this.sidenav.toggle(slot);
  }
}
