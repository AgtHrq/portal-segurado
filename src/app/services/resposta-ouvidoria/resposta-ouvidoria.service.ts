import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class RespostaOuvidoriaService {


constructor(private backendService: BackendService) { }

getRespostasOuvidoria(){
  return this.backendService.protectedRequest('usuarios/ouvidoriaUsuario', 'get');
}

}
