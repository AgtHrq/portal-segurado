import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirfComponent } from './admin-dirf.component';

describe('AdminDirfComponent', () => {
  let component: AdminDirfComponent;
  let fixture: ComponentFixture<AdminDirfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
