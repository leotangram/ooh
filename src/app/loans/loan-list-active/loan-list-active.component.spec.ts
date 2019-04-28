import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanListActiveComponent } from './loan-list-active.component';

describe('LoanListActiveComponent', () => {
  let component: LoanListActiveComponent;
  let fixture: ComponentFixture<LoanListActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanListActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
