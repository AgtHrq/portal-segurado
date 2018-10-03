import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class VisualizarFichaFinanaceiraService {

  constructor(private backendService: BackendService) { }

  getFichaFinanceira(credentials: object){
    return this.backendService.protectedRequest("usuarios/visualizarFichaFinanceira", "post", credentials);
  }
}
