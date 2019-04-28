import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalComponent } from './aditional.component';

describe('AditionalComponent', () => {
  let component: AditionalComponent;
  let fixture: ComponentFixture<AditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
