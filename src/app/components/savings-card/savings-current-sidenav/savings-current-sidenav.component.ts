import { Component, Input } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Account } from 'src/app/interfaces/user';
import { SidenavService } from 'src/app/services/sidenav.service';


@Component({
  selector: 'app-savings-current-sidenav',
  templateUrl: './savings-current-sidenav.component.html',
})
export class SavingsCurrentSidenavComponent {

  @Input() accounts!: Account[];
  @Input() currentObjectiveValue!: number;

  faInfoCircle = faInfoCircle;

  constructor(private sidenavService: SidenavService) { }

  closeSidenav = () => this.sidenavService.close();

}
