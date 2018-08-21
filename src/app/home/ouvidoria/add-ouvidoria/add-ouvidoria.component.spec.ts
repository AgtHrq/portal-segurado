import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOuvidoriaComponent } from './add-ouvidoria.component';

describe('AddOuvidoriaComponent', () => {
  let component: AddOuvidoriaComponent;
  let fixture: ComponentFixture<AddOuvidoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOuvidoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
