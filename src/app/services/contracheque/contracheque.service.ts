import { Injectable } from '@angular/core';

import { BackendService } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class ContrachequeService {

  constructor(private backendService: BackendService) { }

  gerarContracheque(cpf: string) {

    return this.backendService.protectedRequest("usuarios/gerarContraCheque", "post", cpf);

  }

}
