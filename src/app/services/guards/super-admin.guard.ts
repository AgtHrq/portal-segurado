import { UserRole } from './../../models/user-role.enum';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {

  user: User;

  constructor(private userService: UserService, private router: Router){ 

    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.user.user_role.trim() === UserRole.super_admin){
      return true;
    }
    this.router.navigate([""]);
    
  }
}
