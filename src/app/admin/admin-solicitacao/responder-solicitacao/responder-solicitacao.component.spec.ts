import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderSolicitacaoComponent } from './responder-solicitacao.component';

describe('ResponderSolicitacaoComponent', () => {
  let component: ResponderSolicitacaoComponent;
  let fixture: ComponentFixture<ResponderSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
