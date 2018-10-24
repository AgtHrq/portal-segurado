import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class GetNotificacoesService {

  constructor(private backendService: BackendService) { }

  getNotificoes(){
    return this.backendService.protectedRequest("usuarios/sendNotificoes", "get");
  }
}
