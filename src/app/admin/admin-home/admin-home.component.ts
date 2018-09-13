import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  menus: string[] = [
    "Alterar Dados", 
    "Cadastro de usuários",
  ];
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });

  }

}
