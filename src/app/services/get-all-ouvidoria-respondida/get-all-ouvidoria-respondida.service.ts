import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllOuvidoriaRespondidaService {

  constructor(private backendService: BackendService) { }

  getOuvidoriaRespondida(){
    return this.backendService.protectedRequest("usuarios/ouvidoriaRespondida", "get");
  }
}
