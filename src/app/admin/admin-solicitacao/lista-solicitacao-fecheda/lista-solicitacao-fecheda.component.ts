import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Solicitacao } from 'src/app/models/solicitacao';
import { SolicitacaoService } from 'src/app/services/solicitacao/solicitacao.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-solicitacao-fecheda',
  templateUrl: './lista-solicitacao-fecheda.component.html',
  styleUrls: ['./lista-solicitacao-fecheda.component.css']
})
export class ListaSolicitacaoFechedaComponent implements OnInit {

  solicitacoes: Solicitacao[];

  constructor(private solicitacaoService: SolicitacaoService, private userService: UserService, private router: Router) { }

  toggleState(solicitacao: Solicitacao) {

    if (solicitacao.showDetail === 'hidden'){
      solicitacao.showDetail = 'show';
      solicitacao.showTd = 'hidden';
    } else {
      solicitacao.showDetail = 'hidden';
      solicitacao.showTd = 'show';
    }

  }

  ngOnInit() {

    this.solicitacaoService.getSolicitacoesRespondidasAdmin().subscribe(
      res => {
        this.solicitacoes = res.json() as Solicitacao[];
        this.solicitacoes.sort((a, b) => a.dataEncerramento > b.dataEncerramento ? -1 : 1);
        this.solicitacoes.forEach(s => {
          s.showTd = 'show';
          s.showDetail = 'hidden';
        }
          );
      },
      error => {
        if(error.json().message == 'Login expirado, efetue o login novamente!'){
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      }
    )

  }

}
