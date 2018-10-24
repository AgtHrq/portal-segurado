import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOuvidoriaComponent } from './detail-ouvidoria.component';

describe('DetailOuvidoriaComponent', () => {
  let component: DetailOuvidoriaComponent;
  let fixture: ComponentFixture<DetailOuvidoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOuvidoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
