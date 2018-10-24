import { TestBed, inject } from '@angular/core/testing';

import { CadastrarAdmService } from './cadastrarAdm.service';

describe('CadastarAdmService', () =>{
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CadastrarAdmService]
        });
    });

    it('should be created', inject([CadastrarAdmService],
        (service: CadastrarAdmService) => {
            expect(service).toBeTruthy();
    }));
});