import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaVinculoService {

  constructor(private backendService: BackendService) { }

  getVinculos(){
    return this.backendService.protectedRequest("usuarios/consultaVinculosUsuario", "get");
  }
}
