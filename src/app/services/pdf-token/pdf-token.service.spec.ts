import { TestBed, inject } from '@angular/core/testing';

import { PdfTokenService } from './pdf-token.service';

describe('PdfTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfTokenService]
    });
  });

  it('should be created', inject([PdfTokenService], (service: PdfTokenService) => {
    expect(service).toBeTruthy();
  }));
});
