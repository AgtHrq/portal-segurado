import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Authorization } from '../jwt.service';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class AddOuvidoriaService {
  
  constructor(private backendService: BackendService, private auth: Authorization) {}

  sendBackOuvidoria(credentials: object) {
    return this.backendService.protectedRequest("usuarios/cadastrarOuvidoria", "post", credentials);
  }

}
