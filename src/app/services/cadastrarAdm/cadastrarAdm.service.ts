import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import { Authorization } from '../jwt.service';

import { BackendService } from '../backend.service';

@Injectable({
    providedIn: 'root'
})
export class CadastrarAdmService {
    
    constructor(private backendService: BackendService, private auth: Authorization){}

    cadastrarAdm(credentials: object){

        return this.backendService.protectedRequest("usuarios/salvar", "post", credentials);
    }
}