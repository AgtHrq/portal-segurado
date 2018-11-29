import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPdfComponent } from './validar-pdf.component';

describe('ValidarPdfComponent', () => {
  let component: ValidarPdfComponent;
  let fixture: ComponentFixture<ValidarPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
