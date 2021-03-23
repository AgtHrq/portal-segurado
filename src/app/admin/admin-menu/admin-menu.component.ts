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
    new Menu('Home', 'home icon', ''),
    new Menu('Solicitação', 'paper plane icon', 'solicitacao'),
    new Menu('Notificação', 'comment alternate icon', 'notificacao'),
    new Menu('Termo de Uso', 'cloud upload icon', 'termo'),
    new Menu('Segurado', 'user icon', 'segurado'),
    new Menu('Dirf', 'laptop icon', 'dirf'),
    new Menu('Dados', 'file icon', 'dados'),
  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });

  }

  logOut() {

    this.userService.deleteIdAdmin();
    this.userService.logoffUser();
    this.router.navigate(['/']);

  }

}
