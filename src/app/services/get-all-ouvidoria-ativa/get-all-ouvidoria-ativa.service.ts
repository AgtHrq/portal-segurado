import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllOuvidoriaAtivaService {

  constructor(private backendService: BackendService) { }

  getOuvidoriasAtiva(){
    return this.backendService.protectedRequest("usuarios/ouvidoriaAtiva", "get");
  }
}
