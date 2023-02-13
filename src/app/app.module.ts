import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
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

@NgModule({
  declarations: [
    AppComponent,
    ProgressPipe,
    ProgressBarComponent,
    SavingsCardComponent,
    SavingsGoalsComponent,
    SavingsGoalsCardComponent,
    SavingsGoalsCompletedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    DragDropModule,
    MatSidenavModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
