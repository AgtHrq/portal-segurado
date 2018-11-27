import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class SendIdNotificacaoService {

  constructor(private backandService: BackendService) { }

  sendIdNotificacao(id: any){
    return this.backandService.protectedRequest("usuarios/excluirNotificacao", "post", id);
  }
}
