import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterardadosUsuarioComponent } from './alterardados-usuario.component';

describe('AlterardadosUsuarioComponent', () => {
  let component: AlterardadosUsuarioComponent;
  let fixture: ComponentFixture<AlterardadosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterardadosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterardadosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
