import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class CadastraNotificacaoService {

  constructor(private backendService: BackendService) { }

  sendNotificacao(notificacao: object){
    return this.backendService.protectedRequest("usuarios/cadastrarNotificacao", "post", notificacao);
  }
}
