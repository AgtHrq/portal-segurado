import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstVerificationComponent } from './first-verification.component';

describe('FirstVerificationComponent', () => {
  let component: FirstVerificationComponent;
  let fixture: ComponentFixture<FirstVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
