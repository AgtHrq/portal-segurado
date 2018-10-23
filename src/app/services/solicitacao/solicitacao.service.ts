import { Injectable } from '@angular/core';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private backendService: BackendService) { }

  getSolicitacoes() {

    return this.backendService.protectedRequest('usuarios/solicitacoesUsuario', 'get');

  }

  addSolicitacao(data) {

    return this.backendService.protectedRequest('usuarios/enviarSolicitacao', 'post', data);

  }

  getTipoSolicitacao() {

    return this.backendService.protectedRequest('usuarios/tipoSolicitacao', 'get');

  }

  fecharSolicitacao(id: number) {

    return this.backendService.protectedRequest('usuarios/fecharSolicitacao', 'get', null, { id: id });

  }

  getSolicitacaosAbertasAdmin() {

    return this.backendService.protectedRequest('usuarios/solicitacoesGeralAtiva', 'get');

  }

  getSolicitacoesRespondidasAdmin() {

    return this.backendService.protectedRequest('usuarios/solicitacoesGeralRespondida', 'get');

  }

  responderSolicitacaoAdmin(data) {

    return this.backendService.protectedRequest('usuarios/responderSolicitacao', 'post', data)

  }

}
