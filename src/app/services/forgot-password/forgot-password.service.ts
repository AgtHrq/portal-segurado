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

}
