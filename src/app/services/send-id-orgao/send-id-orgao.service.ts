import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class SendIdOrgaoService {

  constructor(private backendService: BackendService) { }

  getListCargos(id: number){
    return this.backendService.unprotectedRequest("usuarios/filterCargos", "get", { idOrgao: id }, true);
  }
}
