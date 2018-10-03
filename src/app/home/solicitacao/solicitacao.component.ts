import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

import { Solicitacao } from './../../models/solicitacao';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { SolicitacaoService } from './../../services/solicitacao/solicitacao.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ])
  ]
})
export class SolicitacaoComponent implements OnInit {

  @Input() title: string = "SOLICITAÇÕES";
  solicitacoes: Solicitacao[] = [];
  numSolicitacoes: number = 0;
  aux: any;
  num: number;
  user: User
  class: string = "hidden";
  state: string = "inactive";

  constructor(private userService: UserService, private solicitacaoService: SolicitacaoService, private router: Router) { 
  }

  ngOnInit() {

    this.userService.getLoggedUser()
      .subscribe(user => this.user = user);

      this.solicitacaoService.getSolicitacoes().subscribe(solicitacoes => {
        this.aux = solicitacoes.json();
        this.solicitacoes = this.aux as Solicitacao[];
        this.solicitacoes.forEach(s => {
          s.showTd = "show";
          s.showDetail = "hidden";
        })
        this.numSolicitacoes = this.solicitacoes.length;
      },
      error=> {
         if (error.json().message.trim() === "Invalid Token") {
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      });

  }

  newSolicitacao(event) {

    event.preventDefault();

  }

  toggleState(){
    
    this.state.trim() === "inactive" ? this.state = "active" : this.state = "inactive";

  }

  atualizaLista(){

    this.solicitacaoService.getSolicitacoes().subscribe(solicitacoes => {
      this.aux = solicitacoes.json();
      this.solicitacoes = this.aux as Solicitacao[];
      this.solicitacoes.forEach(s => {
        s.showTd = "show";
        s.showDetail = "hidden";
      })
      this.numSolicitacoes = this.solicitacoes.length;
    });

  }

}
