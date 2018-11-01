import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitacaoFechedaComponent } from './lista-solicitacao-fecheda.component';

describe('ListaSolicitacaoFechedaComponent', () => {
  let component: ListaSolicitacaoFechedaComponent;
  let fixture: ComponentFixture<ListaSolicitacaoFechedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitacaoFechedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitacaoFechedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
