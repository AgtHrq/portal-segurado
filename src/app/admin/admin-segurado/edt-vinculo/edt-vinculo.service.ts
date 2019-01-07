import { Injectable } from '@angular/core';

import { BackendService } from './../../../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class EdtVinculoService {

  constructor(private backendService: BackendService) { }

  getVinculos(cpf: string){

    return this.backendService.protectedRequest('usuarios/getVinculos', 'get', null, { cpf: cpf });
  }

  getOrgaos(){

    return this.backendService.unprotectedRequest('usuarios/orgaos', 'get');
  }

  getCargosFilter(idOrgao: number){

    return this.backendService.unprotectedRequest('usuarios/filterCargos', 'get', { idOrgao: idOrgao }, true);
  }

  getCargos(){

    return this.backendService.unprotectedRequest('usuarios/cargos', 'get');
  }
}
