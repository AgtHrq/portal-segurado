import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class TipoOuvidoriaService {

  constructor(private backendService: BackendService) { }

  getTipoOuvidoria(){
    return this.backendService.protectedRequest("usuarios/tipoOuvidoria", "get");
  }
}
