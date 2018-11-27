import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user';
import { UserService } from '../../services/user.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-admin-notificacao',
  templateUrl: './admin-notificacao.component.html',
  styleUrls: ['./admin-notificacao.component.css']
})
export class AdminNotificacaoComponent implements OnInit {

  user: User;
  menus: Menu[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.menus = [
      new Menu("Cadastrar notificação", "", "cadastrar"),
      new Menu("Excluir notificação", "", "excluir")
    ];

    this.userService.getLoggedUser().subscribe(
      u => this.user = u as User
    );

  }

}
