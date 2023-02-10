import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsGoalsCardComponent } from './savings-goals-card.component';

describe('SavingsGoalsCardComponent', () => {
  let component: SavingsGoalsCardComponent;
  let fixture: ComponentFixture<SavingsGoalsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsGoalsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsGoalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
