import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOuvidoriaComponent } from './admin-ouvidoria.component';

describe('AdminOuvidoriaComponent', () => {
  let component: AdminOuvidoriaComponent;
  let fixture: ComponentFixture<AdminOuvidoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOuvidoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOuvidoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
