import { Injectable } from '@angular/core';
import { Authorization } from '../jwt.service';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class AlterarDadosAdminService {

  constructor(private backendService: BackendService, private auth: Authorization) { }

    alterarDadosAdmin(credentials: object) {

        return this.backendService.protectedRequest("usuarios/editar", "post", credentials);
    }

    bloquearDesbloquearAdmin(credentials: object) {

        return this.backendService.protectedRequest("usuarios/bloquear-desbloquear-usuario", "post", credentials);
    }

    alterarDadosUsuarioAdmin(credentials: object) {

        return this.backendService.protectedRequest("usuarios/editarAdm", "post", credentials)
    }
}
