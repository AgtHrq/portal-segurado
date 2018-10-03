import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrachequePeriodoDetailComponent } from './contracheque-periodo-detail.component';

describe('ContrachequePeriodoDetailComponent', () => {
  let component: ContrachequePeriodoDetailComponent;
  let fixture: ComponentFixture<ContrachequePeriodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrachequePeriodoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrachequePeriodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
