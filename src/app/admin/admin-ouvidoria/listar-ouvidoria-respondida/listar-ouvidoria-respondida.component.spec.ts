import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOuvidoriaRespondidaComponent } from './listar-ouvidoria-respondida.component';

describe('ListarOuvidoriaRespondidaComponent', () => {
  let component: ListarOuvidoriaRespondidaComponent;
  let fixture: ComponentFixture<ListarOuvidoriaRespondidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOuvidoriaRespondidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOuvidoriaRespondidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
