import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespotaComponent } from './respota.component';

describe('RespotaComponent', () => {
  let component: RespotaComponent;
  let fixture: ComponentFixture<RespotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
