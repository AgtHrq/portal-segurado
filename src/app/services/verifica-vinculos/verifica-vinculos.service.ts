import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Authorization } from '../jwt.service';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerificaVinculosService {

  private cadastrarSource: Subject<any> = new Subject<any>();
  cadastrarObservable = this.cadastrarSource.asObservable();

  constructor(private backEndService: BackendService, private auth: Authorization) { }

  verificarVinculoSegurado(credentials: object){
    return this.backEndService.unprotectedRequest("usuarios/verificaInfoVinculo", "post", credentials);
  }
}
