import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizaFichaComponent } from './vizualiza-ficha.component';

describe('VizualizaFichaComponent', () => {
  let component: VizualizaFichaComponent;
  let fixture: ComponentFixture<VizualizaFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizualizaFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
