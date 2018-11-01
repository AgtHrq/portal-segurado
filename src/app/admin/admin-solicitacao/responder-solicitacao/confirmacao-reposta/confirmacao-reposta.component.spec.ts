import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoRepostaComponent } from './confirmacao-reposta.component';

describe('ConfirmacaoRepostaComponent', () => {
  let component: ConfirmacaoRepostaComponent;
  let fixture: ComponentFixture<ConfirmacaoRepostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacaoRepostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoRepostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
