import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Authorization } from './jwt.service';
import { BackendService } from './backend.service';
import { User } from '../models/user';
import { LocalIdAdminService } from './local-id-admin.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private backendService: BackendService, private auth: Authorization, private lastAdmin: LocalIdAdminService) {

    this.auth.isLogged() && this.decodeAndNotify();

   }

  getLoggedUser() {

    return this.userSubject.asObservable();

  }

  getLastAdmin() {

    return this.lastAdmin.getId();

  }

  deleteIdAdmin() {

    this.lastAdmin.deleteId();

  }

  setLastAdmin(idAdmin: string) {

    this.lastAdmin.setId(idAdmin);

  }

  updateLoggedUser(token) {

    this.auth.setToken(token);
    this.userSubject.next(this.auth.loggedInfo() as User);

  }

  private decodeAndNotify() {

    const token = this.auth.getToken();
    this.auth.setToken(token);
    const user = this.auth.loggedInfo() as User;
    this.userSubject.next(user);

  }

  logoffUser() {

    this.auth.deleteToken();

  }

  isLogged() {

    return this.auth.isLogged();

  }

  authenticate(credentials: Object) {

    return this.backendService.unprotectedRequest('usuarios/autenticar', 'post', credentials);

  }

  authenticateByAdm(cpf: String) {

    return this.backendService.protectedRequest('usuarios/autenticarPorAdmin', 'post', cpf);

  }

  authenticateAdmBySegurado(idAdmin: String) {

    return this.backendService.protectedRequest('usuarios/autenticarAdminPorSegurado', 'post', idAdmin);

  }

  alterarDados(dados: any) {

    return this.backendService.protectedRequest('usuarios/alterarDadosSegurado', 'post', dados);

  }

  updateUser(dados: any){

    return this.backendService.protectedRequest('usuarios/editar', 'post', dados)

  }

  changePasswordSegurado(dados: any) {

    return this.backendService.protectedRequest('usuarios/changePassword', 'post', dados)

  }

  aceitaTermos(dados) {

    return this.backendService.unprotectedRequest('aceitaTermos', 'post', dados);
  }

  verificaEmail(email: string) {

    return this.backendService.unprotectedHttpClientRequst('usuarios/verificaEmail', 'get', { email: email });
  }

}
