import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ProgressPipe } from './pipes/progress/progress.pipe';
import { SavingsCardComponent } from './components/savings-card/savings-card.component';
import { SavingsGoalsCardComponent } from './components/savings-goals-card/savings-goals-card.component';
import { SavingsGoalsComponent } from './components/savings-goals/savings-goals.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingsCardComponent,
    SavingsGoalsComponent,
    SavingsGoalsCardComponent,
    ProgressPipe,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
