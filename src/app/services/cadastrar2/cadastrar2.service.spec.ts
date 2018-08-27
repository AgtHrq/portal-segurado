import { TestBed, inject } from '@angular/core/testing';

import { Cadastrar2Service } from './cadastrar2.service';

describe('Cadastrar2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cadastrar2Service]
    });
  });

  it('should be created', inject([Cadastrar2Service], (service: Cadastrar2Service) => {
    expect(service).toBeTruthy();
  }));
});
