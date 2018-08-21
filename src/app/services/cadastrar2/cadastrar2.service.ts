import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Authorization } from '../jwt.service';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Cadastrar2Service {

  private cadastrarSource: Subject<any> = new Subject<any>();
  cadastrarObservable = this.cadastrarSource.asObservable();

  constructor(private backendService: BackendService, private auth: Authorization) { }

  cadastrarSegurado(credentials: object){
    
    return this.backendService.unprotectedRequest("usuarios/salvarSegurado", "post", credentials);

  }
}
