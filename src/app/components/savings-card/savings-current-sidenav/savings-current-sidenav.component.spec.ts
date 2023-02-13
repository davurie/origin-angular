import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCurrentSidenavComponent } from './savings-current-sidenav.component';

describe('SavingsCurrentSidenavComponent', () => {
  let component: SavingsCurrentSidenavComponent;
  let fixture: ComponentFixture<SavingsCurrentSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsCurrentSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsCurrentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
