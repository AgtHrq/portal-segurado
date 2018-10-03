import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { User } from '../../models/user';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-admin-ouvidoria',
  templateUrl: './admin-ouvidoria.component.html',
  styleUrls: ['./admin-ouvidoria.component.css']
})
export class AdminOuvidoriaComponent implements OnInit {

  user: User;
  menus: Menu[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.menus = [
      new Menu("Responder ouvidoria", "", ""),
      new Menu("Listagem de ouvidoria", "", "")
    ];
    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });

  }

}
