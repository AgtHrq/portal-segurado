import { Injectable } from '@angular/core';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private backendService: BackendService) { }

  getSolicitacoes(cpf: string) {

    return this.backendService.protectedRequest("usuarios/solicitacoes", "post", { cpf: cpf });

  }

  addSolicitacao(data) {

    return this.backendService.protectedRequest("usuarios/enviarSolicitacao", "post", data);

  }

}
