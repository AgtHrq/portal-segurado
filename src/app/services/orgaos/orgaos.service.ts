import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class OrgaosService {

  constructor(private backendService: BackendService) { }

  getOrgaos(){
    return this.backendService.unprotectedRequest("usuarios/orgaos", "get");
  }
}
