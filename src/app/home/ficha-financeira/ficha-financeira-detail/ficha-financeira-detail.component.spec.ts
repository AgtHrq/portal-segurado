import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaFinanceiraDetailComponent } from './ficha-financeira-detail.component';

describe('FichaFinanceiraDetailComponent', () => {
  let component: FichaFinanceiraDetailComponent;
  let fixture: ComponentFixture<FichaFinanceiraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaFinanceiraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaFinanceiraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
