import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDirfComponent } from './upload-dirf.component';

describe('UploadDirfComponent', () => {
  let component: UploadDirfComponent;
  let fixture: ComponentFixture<UploadDirfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDirfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
