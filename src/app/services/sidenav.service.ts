import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
  private sidenav!: MatSidenav;
  private slot!: string;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(slot: string): void {
    this.slot = slot;
    this.sidenav.toggle();
  }

  public getSlot(): string {
    return this.slot;
  }
}