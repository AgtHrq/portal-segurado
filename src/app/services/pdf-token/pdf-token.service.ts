import { BackendService } from './../backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfTokenService {

  constructor(private backenService: BackendService) { }

  validarDocumento(params){

    return this.backenService.unprotectedDowloadRequest('validar', params);
  }
}
