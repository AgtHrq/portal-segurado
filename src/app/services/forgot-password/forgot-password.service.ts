import { BackendService } from '../backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private backendService: BackendService) { }

  verificaUsuario(cpf) {

    return this.backendService.unprotectedRequest("usuarios/verificaUsuario", "post", cpf);

  }

  enviaEmail(email) {

    return this.backendService.unprotectedRequest("usuarios/esqueceuSenhaEmail", "post", email);

  }

  verificaPergunta(pergunta) {

    return this.backendService.unprotectedRequest("usuarios/esqueceuSenhaPergunta", "post", pergunta);

  }

  novaSenha(data){

    return this.backendService.unprotectedRequest("usuarios/trocarSenha", "post", data);

  }

}
