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

  menus: Menu[] = [new Menu("Meus Processos", "book", "processos"), new Menu("Contracheque", "money bill alternate", "contracheque"), new Menu("Ficha Financeira", "newspaper", "ficha-financeira"),
    new Menu("PBConsig", "dollar", ""), new Menu("Solicitações", "paper plane outline", "solicitacoes"), new Menu("Ouvidoria", "users", "ouvidoria")];
  numNotificacoes: number = 0;
  filter: string = "";
  user$: Observable<User>;
  stateDados: string = 'inactive';
  stateSenha: string = 'inactive';

  constructor(private userService : UserService, private utils: HomeUtils, private router: Router) {

    this.user$ = this.userService.getLoggedUser();
    this.utils.home();

   }

   toggleState(senha: boolean) {

    senha ? this.stateSenha.trim() === "inactive" ? this.stateSenha = "active" : this.stateSenha = "inactive" : 
      this.stateDados.trim() === "inactive" ? this.stateDados = "active" : this.stateDados = "inactive";

   }

   logout() {

    this.userService.logoffUser();
    this.router.navigate(['/']);

   }

  ngAfterViewInit() {

    this.utils.home();

  }

}