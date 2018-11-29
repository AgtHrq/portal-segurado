import { Injectable } from '@angular/core';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class ContrachequeService {

  constructor(private backendService: BackendService) { }

  gerarContracheque() {

    return this.backendService.protectedRequest('usuarios/gerarContraCheque', 'get');

  }

  consultarVinculos() {

    return this.backendService.protectedRequest('usuarios/consultaVinculosUsuario', 'get');

  }

  consultarPeriodos(idVinculo: string) {

    return this.backendService.protectedRequest('usuarios/consultaPeriodosUsuario', 'post', { idVinculo: idVinculo });
  
  }

  getPdf(data){

    return this.backendService.protectedDowloadRequest('usuarios/gerarRelatorio/contracheque', data);
  }

}
