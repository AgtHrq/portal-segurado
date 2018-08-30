import { BackendService } from './../backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private backenService: BackendService) { }

  getProcessos(cpf) {
    
    return this.backenService.protectedRequest('usuarios/processos', 'post', { cpf: cpf });

  }

}
