import { Component, OnInit } from '@angular/core';

import { UserRole } from './../../models/user-role.enum';
import { UserService } from './../../services/user.service';
import { User } from '../../models/user';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  menus: Menu[];
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });

    if (this.user.user_role === UserRole.admin){
      this.menus = [new Menu("Alterar dados", "", "")];
    } else if(this.user.user_role === UserRole.super_admin) {
      this.menus = [
        new Menu("Alterar dados", "", ""),
        new Menu("Cadastro de usuários", "", "usuarios/cadastro")
      ];
    }

  }

}
