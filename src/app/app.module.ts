import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProgressPipe } from './pipes/progress/progress.pipe';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/utils/progress-bar/progress-bar.component';
import { SavingsCardComponent } from './components/savings-card/savings-card.component';
import { SavingsGoalsCardComponent } from './components/savings-goals/savings-goals-card/savings-goals-card.component';
import { SavingsGoalsComponent } from './components/savings-goals/savings-goals.component';
import { SavingsGoalsCompletedComponent } from './components/savings-goals/savings-goals-completed/savings-goals-completed.component';

import { SidenavService } from './services/sidenav.service';
import { SavingsCurrentSidenavComponent } from './components/savings-card/savings-current-sidenav/savings-current-sidenav.component';
import { SavingsMonthlySidenavComponent } from './components/savings-card/savings-monthly-sidenav/savings-monthly-sidenav.component';
import { SavingGoalsNewComponent } from './components/savings-goals/saving-goals-new/saving-goals-new.component';
import { SelectOnFocusDirective } from './directives/select-on-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProgressPipe,
    ProgressBarComponent,
    SavingsCardComponent,
    SavingsGoalsComponent,
    SavingsGoalsCardComponent,
    SavingsGoalsCompletedComponent,
    SavingsCurrentSidenavComponent,
    SavingsMonthlySidenavComponent,
    SavingGoalsNewComponent,
    SelectOnFocusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    DragDropModule,
    MatSidenavModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
