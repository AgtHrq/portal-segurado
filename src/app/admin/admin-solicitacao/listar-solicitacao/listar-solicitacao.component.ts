import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SolicitacaoService } from 'src/app/services/solicitacao/solicitacao.service';
import { UserService } from 'src/app/services/user.service';
import { Solicitacao } from 'src/app/models/solicitacao';

@Component({
  selector: 'app-listar-solicitacao',
  templateUrl: './listar-solicitacao.component.html',
  styleUrls: ['./listar-solicitacao.component.css']
})
export class ListarSolicitacaoComponent implements OnInit {

  solicitacoes: Solicitacao[];
  solicitacao: Solicitacao = null;
  showModal: boolean = false;
  message: string = '';
  showMessage: boolean = false;

  constructor(private solicitacaoService: SolicitacaoService, private userService: UserService, private router: Router) { }

  toggleState(solicitacao: Solicitacao){

    this.solicitacao = solicitacao;
    this.showModal = true;

  }

  success(message: string) {

    this.message = message;
    this.showMessage = true;
    this.solicitacoes.splice(this.solicitacoes.indexOf(this.solicitacao), 1);

  }
  
  ngOnInit() {

    this.solicitacaoService.getSolicitacaosAbertasAdmin().subscribe(res => {
      this.solicitacoes = res.json() as Solicitacao[];
      this.solicitacoes.sort((a, b) => a.dataCriacao > b.dataCriacao ? 1 : -1);
    },
    error => {
      if (error.json().message != 'Login expirado, efetue o login novamente!'){

      }
      else if(error.json().message == 'Login expirado, efetue o login novamente!'){
        this.userService.logoffUser();
        this.router.navigate(['/']);
      }
    }
    )

  }

}
