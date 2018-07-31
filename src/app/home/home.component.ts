import { Component, OnInit } from '@angular/core';

import { Menu } from './../models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: Menu[] = [new Menu("Meus Processos", "book"), new Menu("Pagamentos", "money bill alternate"), new Menu("Ficha Financeira", "newspaper"),
    new Menu("PBConsig", "dollar"), new Menu("Solicitações", "paper plane outline"), new Menu("Ouvidoria", "users")];

  solicitacoes = [];

  constructor() { }

  ngOnInit() {
  }

}
