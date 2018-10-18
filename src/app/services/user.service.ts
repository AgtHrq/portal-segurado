import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Authorization } from './jwt.service';
import { BackendService } from './backend.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private backendService: BackendService, private auth: Authorization) {

    this.auth.isLogged() && this.decodeAndNotify();

   }

  getLoggedUser() {

    return this.userSubject.asObservable();

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

  alterarDados(dados: any) {

    return this.backendService.protectedRequest('usuarios/alterarDados', 'post', dados);

  }

  updateUser(user: User){
    return this.backendService.protectedRequest('usuarios/editar', 'post', user)
  }

}
