import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSolicitacaoComponent } from './detail-solicitacao.component';

describe('DetailSolicitacaoComponent', () => {
  let component: DetailSolicitacaoComponent;
  let fixture: ComponentFixture<DetailSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
