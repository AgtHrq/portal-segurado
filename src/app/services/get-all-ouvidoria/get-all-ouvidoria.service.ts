import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllOuvidoriaService {

  constructor(private backendService: BackendService) { }

  getOuvidoria(){
    return this.backendService.protectedRequest("usuarios/sendAllOuvidoria", "get");
  }
}
