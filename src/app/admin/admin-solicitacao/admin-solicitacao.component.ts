import { Component, OnInit } from '@angular/core';

import { Menu } from './../../models/menu';
import { User } from './../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-solicitacao',
  templateUrl: './admin-solicitacao.component.html',
  styleUrls: ['./admin-solicitacao.component.css']
})
export class AdminSolicitacaoComponent implements OnInit {

  user: User;
  menus: Menu[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.menus = [
      new Menu("Listar Solicitações Abertas", "", ""),
      new Menu("Listar Solicitações Fechadas", "", "")
    ];

    this.userService.getLoggedUser().subscribe(
      u => this.user = u as User
    );

  }

}
