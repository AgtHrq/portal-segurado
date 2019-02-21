import { Injectable } from '@angular/core';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class DirfService {

  constructor(private backendService: BackendService) { }

  getYears(){

    return this.backendService.protectedRequest('usuarios/anos', 'get');
  }

  getDirfSegurado(ano){

    return this.backendService.protectedDowloadRequest('usuarios/get/dirf', ano, 'get');
  }
}
