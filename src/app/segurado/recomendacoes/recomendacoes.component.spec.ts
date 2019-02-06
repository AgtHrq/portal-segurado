import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacoesComponent } from './recomendacoes.component';

describe('RecomendacoesComponent', () => {
  let component: RecomendacoesComponent;
  let fixture: ComponentFixture<RecomendacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
