import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import { Authorization } from '../jwt.service';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class Cadastrar2Service {

  constructor(private backendService: BackendService, private auth: Authorization) { }

  cadastrarSegurado(credentials: object){
    
    return this.backendService.unprotectedRequest("usuarios/salvarSegurado", "post", credentials);

  }
}
