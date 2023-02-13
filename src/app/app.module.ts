import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ProgressPipe } from './pipes/progress/progress.pipe';
import { ProgressBarComponent } from './components/utils/progress-bar/progress-bar.component';
import { SavingsCardComponent } from './components/savings-card/savings-card.component';
import { SavingsGoalsCardComponent } from './components/savings-goals/savings-goals-card/savings-goals-card.component';
import { SavingsGoalsComponent } from './components/savings-goals/savings-goals.component';
import { SavingsGoalsCompletedComponent } from './components/savings-goals/savings-goals-completed/savings-goals-completed.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
