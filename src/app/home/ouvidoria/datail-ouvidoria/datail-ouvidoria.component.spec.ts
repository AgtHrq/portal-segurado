import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailOuvidoriaComponent } from './datail-ouvidoria.component';

describe('DatailOuvidoriaComponent', () => {
  let component: DatailOuvidoriaComponent;
  let fixture: ComponentFixture<DatailOuvidoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailOuvidoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailOuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
