import { BackendService } from './../backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private beckendService: BackendService) { }

  getNotificacoesSegurado() {

    return this.beckendService.protectedRequest('usuarios/notificacoes', 'get');
  }

}
