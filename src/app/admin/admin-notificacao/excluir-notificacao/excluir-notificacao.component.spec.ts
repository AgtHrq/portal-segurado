import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirNotificacaoComponent } from './excluir-notificacao.component';

describe('ExcluirNotificacaoComponent', () => {
  let component: ExcluirNotificacaoComponent;
  let fixture: ComponentFixture<ExcluirNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
