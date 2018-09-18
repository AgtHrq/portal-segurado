import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/user';
import { UserService } from '../../services/user.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  user: User;
  menus: Menu[] = [
    new Menu("Home", "home icon", ""), 
    new Menu("Ouvidoria", "users icon", "ouvidoria"),
    new Menu("Solicitação", "paper plane icon", ""),
    new Menu("Notificação", "comment alternate icon", "")
  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });

  }

  logOut() {

    this.userService.logoffUser();
    this.router.navigate(["/"]);

  }

}
