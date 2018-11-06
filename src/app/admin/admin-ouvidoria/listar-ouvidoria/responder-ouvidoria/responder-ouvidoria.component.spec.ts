import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderOuvidoriaComponent } from './responder-ouvidoria.component';

describe('ResponderOuvidoriaComponent', () => {
  let component: ResponderOuvidoriaComponent;
  let fixture: ComponentFixture<ResponderOuvidoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderOuvidoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderOuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
