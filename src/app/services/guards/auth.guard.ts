import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Authorization } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: Authorization, private router: Router){ }

  canActivate(): boolean {
    
    if(this.auth.isLogged()){

      return true;

    } else {

      this.router.navigate(['/']);
      return false;

    }

  }
}
