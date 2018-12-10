import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocsComponent } from './lista-docs.component';

describe('ListaDocsComponent', () => {
  let component: ListaDocsComponent;
  let fixture: ComponentFixture<ListaDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
