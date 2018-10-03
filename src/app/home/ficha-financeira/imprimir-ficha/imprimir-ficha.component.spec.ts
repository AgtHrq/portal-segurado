import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirFichaComponent } from './imprimir-ficha.component';

describe('ImprimirFichaComponent', () => {
  let component: ImprimirFichaComponent;
  let fixture: ComponentFixture<ImprimirFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimirFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
