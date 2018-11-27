import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class GetUserHashService {

  constructor(private backendService: BackendService) { }

  getUserHash(hash){
    return this.backendService.unprotectedRequest("usuarios/hash/validar", "get", { payload:hash }, true);
  }
}
