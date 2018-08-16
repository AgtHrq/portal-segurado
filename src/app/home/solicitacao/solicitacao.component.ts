import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Solicitacao } from './../../models/solicitacao';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';

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
  solicitacoes: any = [
    { titulo: "XXX", descricao: "YYYYYYYYYY", data: "XXX", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
    { titulo: "BBB", descricao: "CCCCCCCCCCCCCCCCCCCCCCC CCCCCCCCCCC CCCCCCCCCCCCCC CCCCCCCCCCCCCCCCCCCCCCCC CCCCCCCCCCCCCCCCCC CCCCCCCCCCCCCC CCCCC CCCCCCCCCC",
      data: "BBB", showDetail: "hidden", showTd: "show" },
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
