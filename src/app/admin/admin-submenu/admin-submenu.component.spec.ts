import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubmenuComponent } from './admin-submenu.component';

describe('AdminSubmenuComponent', () => {
  let component: AdminSubmenuComponent;
  let fixture: ComponentFixture<AdminSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
