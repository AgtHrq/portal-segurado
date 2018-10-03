import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class ImprimirFichaPeriodoService {

  constructor(private backendService: BackendService) { }

  getPeriodoFichaFinanceira(credentials: object){
    return this.backendService.protectedRequest("usuarios/imprimirFichaFinanceira", "post", credentials);
  }
}
