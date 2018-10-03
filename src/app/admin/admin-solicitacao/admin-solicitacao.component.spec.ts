import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolicitacaoComponent } from './admin-solicitacao.component';

describe('AdminSolicitacaoComponent', () => {
  let component: AdminSolicitacaoComponent;
  let fixture: ComponentFixture<AdminSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
