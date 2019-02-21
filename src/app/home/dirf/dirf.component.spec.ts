import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirfComponent } from './dirf.component';

describe('DirfComponent', () => {
  let component: DirfComponent;
  let fixture: ComponentFixture<DirfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
