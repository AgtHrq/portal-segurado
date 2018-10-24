import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOuvidoriaComponent } from './listar-ouvidoria.component';

describe('ListarOuvidoriaComponent', () => {
  let component: ListarOuvidoriaComponent;
  let fixture: ComponentFixture<ListarOuvidoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOuvidoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
