import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  user: User;

  constructor(private auth: UserService, private router: Router){

    this.auth.getLoggedUser().subscribe(user => {
      this.user = user;
    });

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.user.user_role.trim() === "Super Administrador" ){

      return true;

    } else {

      this.auth.logoffUser();
      this.router.navigate(["/"]);

    }

  }
}
