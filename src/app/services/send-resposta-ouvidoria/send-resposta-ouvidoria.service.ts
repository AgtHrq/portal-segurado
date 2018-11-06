import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class SendRespostaOuvidoriaService {

  constructor(private backendService: BackendService) { }

  sendResposta(resposta){
    return this.backendService.protectedRequest("usuarios/responderOuvidoria", "post", resposta);
  }
}
