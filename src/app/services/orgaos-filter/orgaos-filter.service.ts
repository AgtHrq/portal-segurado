import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class OrgaosFilterService {

  constructor(private backendService: BackendService) { }

  getFilterOrgaos(){
    return this.backendService.unprotectedRequest("usuarios/filterOrgaos", "get");
  }
}
