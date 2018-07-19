import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Authorization } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class Cadastrar2Service {

  constructor(private backendService: BackendService, private auth: Authorization) { }

  cadastrarSegurado(credentials: object){
    
    return this.backendService.unprotectedRequest("", "post", credentials);

  }
}
