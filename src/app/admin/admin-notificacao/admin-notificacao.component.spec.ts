import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificacaoComponent } from './admin-notificacao.component';

describe('AdminNotificacaoComponent', () => {
  let component: AdminNotificacaoComponent;
  let fixture: ComponentFixture<AdminNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
