import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  
  constructor(private backendService: BackendService) { }
  
  verificarSegurado(credentials: Object) {

    return this.backendService.unprotectedRequest("usuarios/verificaInfoSegurado", "post", credentials);

  }
}
