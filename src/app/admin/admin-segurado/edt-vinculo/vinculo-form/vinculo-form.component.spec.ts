import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoFormComponent } from './vinculo-form.component';

describe('VinculoFormComponent', () => {
  let component: VinculoFormComponent;
  let fixture: ComponentFixture<VinculoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
