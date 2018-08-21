import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVerificaVinculo } from './cadastro-verifica-vinculo.component';

describe('FormValidacaoMatriculaComponent', () => {
  let component: CadastroVerificaVinculo;
  let fixture: ComponentFixture<CadastroVerificaVinculo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVerificaVinculo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVerificaVinculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
