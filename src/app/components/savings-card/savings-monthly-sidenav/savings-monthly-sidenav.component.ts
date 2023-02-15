import { Component, Input } from '@angular/core';
import { SavingsViewModel } from 'src/app/models/savings.model';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-savings-monthly-sidenav',
  templateUrl: './savings-monthly-sidenav.component.html',
})
export class SavingsMonthlySidenavComponent {

  @Input() savings!: SavingsViewModel;

  constructor(private sidenavService: SidenavService) { }

  closeSidenav = () => this.sidenavService.toggle('');

}
