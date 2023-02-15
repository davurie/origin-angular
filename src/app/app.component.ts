import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { SidenavService } from './services/sidenav.service';
import { UserState } from './states/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('drawer') public sidenav!: MatSidenav;

  faXmark = faXmark;

  constructor(
    private sidenavService: SidenavService,
    public userState: UserState
  ) { }

  getSidenavSlot = () => this.sidenavService.getSlot();
  closeSidenav = () => this.sidenavService.toggle('');

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
