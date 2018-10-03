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
      new Menu("Responder solicitação", "", ""),
      new Menu("Fechar solicitação", "", "")
    ];

    this.userService.getLoggedUser().subscribe(
      u => this.user = u as User
    );

  }

}
