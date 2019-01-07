import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtVinculoComponent } from './edt-vinculo.component';

describe('EdtVinculoComponent', () => {
  let component: EdtVinculoComponent;
  let fixture: ComponentFixture<EdtVinculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtVinculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
