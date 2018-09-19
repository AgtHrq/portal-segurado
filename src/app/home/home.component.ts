import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Menu } from './../models/menu';
import { User } from '../models/user';
import { HomeUtils } from './../utils/home-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  menus: Menu[] = [new Menu("Meus Processos", "book", "processos"), new Menu("Pagamentos", "money bill alternate", ""), new Menu("Ficha Financeira", "newspaper", "ficha-financeira"),
    new Menu("PBConsig", "dollar", ""), new Menu("Solicitações", "paper plane outline", "solicitacoes"), new Menu("Ouvidoria", "users", "ouvidoria")];
  numNotificacoes: number = 0;
  filter: string = "";
  user$: Observable<User>;
  state: string = 'inactive';

  constructor(private userService : UserService, private utils: HomeUtils, private router: Router) {

    this.user$ = this.userService.getLoggedUser();
    this.utils.home();

   }

   toggleState() {

    this.state.trim() === "inactive" ? this.state = "active" : this.state = "inactive";

   }

   logout() {

    this.userService.logoffUser();
    this.router.navigate(['/']);

   }

  ngAfterViewInit() {

    this.utils.home();

  }

}