import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListaUsuariosComponent } from './modal-lista-usuarios.component';

describe('ModalListaUsuariosComponent', () => {
  let component: ModalListaUsuariosComponent;
  let fixture: ComponentFixture<ModalListaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
