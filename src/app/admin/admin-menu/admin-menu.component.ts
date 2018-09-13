import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  user: User;

  menus: any[] = [
    { descricao: "Home", icon: "home icon" }, 
    { descricao: "Notificação", icon: "users icon" }, 
    { descricao: "Solicitação", icon: "paper plane icon" }
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
