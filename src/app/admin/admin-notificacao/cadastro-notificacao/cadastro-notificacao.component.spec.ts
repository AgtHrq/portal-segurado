import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNotificacaoComponent } from './cadastro-notificacao.component';

describe('CadastroNotificacaoComponent', () => {
  let component: CadastroNotificacaoComponent;
  let fixture: ComponentFixture<CadastroNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
