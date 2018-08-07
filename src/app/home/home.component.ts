import { Component, OnInit, OnChanges } from '@angular/core';

import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Menu } from './../models/menu';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: Menu[] = [new Menu("Meus Processos", "book", "processos"), new Menu("Pagamentos", "money bill alternate", ""), new Menu("Ficha Financeira", "newspaper", ""),
    new Menu("PBConsig", "dollar", ""), new Menu("Solicitações", "paper plane outline", ""), new Menu("Ouvidoria", "users", "")];
  numNotificacoes: number = 0;
  filter: string = "";
  user$: Observable<User>;

  constructor(private userService : UserService) {

    this.user$ = this.userService.getLoggedUser();

   }

  ngOnInit() { }

}