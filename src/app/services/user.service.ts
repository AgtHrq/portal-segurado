import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Authorization } from './jwt.service';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedUserSource: Subject<any> = new Subject<any>();
  loggedUserObservable = this.loggedUserSource.asObservable();

  constructor(private backendService: BackendService, private auth: Authorization) { }

  getLoggedUser() {

    return this.auth.loggedInfo();

  }

  updateLoggedUser(token) {

    this.auth.setToken(token);
    this.loggedUserSource.next(this.getLoggedUser());

  }

  logoffUser() {

    this.auth.deleteToken();

  }

  isLogged() {

    return this.auth.isLogged();

  }

  authenticate(credentials: Object) {

    return this.backendService.unprotectedRequest("usuarios/autenticar", "post", credentials);

  }

}
