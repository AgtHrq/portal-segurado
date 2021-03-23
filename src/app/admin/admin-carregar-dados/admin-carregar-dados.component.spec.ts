import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarregarDadosComponent } from './admin-carregar-dados.component';

describe('AdminCarregarDadosComponent', () => {
  let component: AdminCarregarDadosComponent;
  let fixture: ComponentFixture<AdminCarregarDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarregarDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarregarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
