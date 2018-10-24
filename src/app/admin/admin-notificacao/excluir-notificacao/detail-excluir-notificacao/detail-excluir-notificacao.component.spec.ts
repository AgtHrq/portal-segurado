import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExcluirNotificacaoComponent } from './detail-excluir-notificacao.component';

describe('DetailExcluirNotificacaoComponent', () => {
  let component: DetailExcluirNotificacaoComponent;
  let fixture: ComponentFixture<DetailExcluirNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailExcluirNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExcluirNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
