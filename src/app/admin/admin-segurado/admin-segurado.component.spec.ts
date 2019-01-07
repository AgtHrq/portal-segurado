import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeguradoComponent } from './admin-segurado.component';

describe('AdminSeguradoComponent', () => {
  let component: AdminSeguradoComponent;
  let fixture: ComponentFixture<AdminSeguradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeguradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
