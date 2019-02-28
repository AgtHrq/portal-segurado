import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { Authorization } from '../jwt.service';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerificaVinculosService {

  constructor(private backEndService: BackendService, private auth: Authorization) { }

  verificarVinculoSegurado(credentials: object){
    return this.backEndService.unprotectedRequest("usuarios/verificaInfoVinculo", "post", credentials);
  }

  getAnoMes(cpf: string){
    return this.backEndService.unprotectedRequest('usuarios/getAnoMesSalario', 'get', { cpf: cpf }, true);
  }
}
