import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private matSnackBar: MatSnackBar) { }

  show(
    message: string,
    action: string,
    type: 'danger' | 'success',
    duration = 5000,
  ) {
    this.matSnackBar.open(message, action, {
      duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'end',
      panelClass: [`snackbar__${type}`],
    });
  }
}
