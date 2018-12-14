import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarTermosComponent } from './atualizar-termos.component';

describe('AtualizarTermosComponent', () => {
  let component: AtualizarTermosComponent;
  let fixture: ComponentFixture<AtualizarTermosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarTermosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarTermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
