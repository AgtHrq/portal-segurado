import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitacaoComponent } from './list-solicitacao.component';

describe('ListSolicitacaoComponent', () => {
  let component: ListSolicitacaoComponent;
  let fixture: ComponentFixture<ListSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
