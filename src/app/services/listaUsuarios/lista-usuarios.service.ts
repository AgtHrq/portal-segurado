import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Authorization } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  constructor(private backendService: BackendService, private auth: Authorization) { }

    listarUsuariosAdmin(credentials: object) {

        return this.backendService.protectedRequest("usuarios/listarUsuarios", "get");
    }
}
