import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListaComponent } from './detail-lista.component';

describe('DetailListaComponent', () => {
  let component: DetailListaComponent;
  let fixture: ComponentFixture<DetailListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
