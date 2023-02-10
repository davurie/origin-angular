import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsGoalsCompletedComponent } from './savings-goals-completed.component';

describe('SavingsGoalsCompletedComponent', () => {
  let component: SavingsGoalsCompletedComponent;
  let fixture: ComponentFixture<SavingsGoalsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsGoalsCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsGoalsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
