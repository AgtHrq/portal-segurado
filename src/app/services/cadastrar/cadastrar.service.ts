import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { Authorization } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  private cadastrarSource: Subject<any> = new Subject<any>();
  cadastrarObservable = this.cadastrarSource.asObservable();

  constructor(private backendService: BackendService, private auth: Authorization) { }
  
  verificarSegurado(credentials: Object) {

    return this.backendService.unprotectedRequest("usuarios/verificaInfoSegurado", "post", credentials);

  }
}
