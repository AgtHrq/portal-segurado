import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDados2Component } from './upload-dados2.component';

describe('UploadDados2Component', () => {
  let component: UploadDados2Component;
  let fixture: ComponentFixture<UploadDados2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDados2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDados2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
