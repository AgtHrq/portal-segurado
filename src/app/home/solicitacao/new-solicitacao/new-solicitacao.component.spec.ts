import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolicitacaoComponent } from './new-solicitacao.component';

describe('NewSolicitacaoComponent', () => {
  let component: NewSolicitacaoComponent;
  let fixture: ComponentFixture<NewSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
