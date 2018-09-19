/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FichaFinanceiraComponent } from './ficha-financeira.component';

describe('FichaFinanceiraComponent', () => {
  let component: FichaFinanceiraComponent;
  let fixture: ComponentFixture<FichaFinanceiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaFinanceiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaFinanceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
