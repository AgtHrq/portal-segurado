import { Pergunta } from './../../models/pergunta';
import { BackendService } from './../backend.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private backendService: BackendService) { }

  getPerguntas() {

    return this.backendService.unprotectedRequest("usuarios/perguntas", "get");

  }

}
