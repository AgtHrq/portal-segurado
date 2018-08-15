import { Solicitacao } from './../../models/solicitacao';
import { Component, OnInit, Input } from '@angular/core';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  @Input() title: string = "SOLICITAÇÕES";
  solicitacoes: any = [
    { titulo: "XXX", descricao: "YYYYYYYYYY", data: "XXX", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" }
  ] as Solicitacao[];
  num: number;
  user: User
  class: string = "hidden";

  constructor(private userService: UserService) { 
  }

  ngOnInit() {

    this.userService.getLoggedUser()
      .subscribe(user => this.user = user);

  }

  newSolicitacao(event) {

    event.preventDefault();

  }

}
