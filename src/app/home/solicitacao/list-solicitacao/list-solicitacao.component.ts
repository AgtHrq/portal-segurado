import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Solicitacao } from './../../../models/solicitacao';

@Component({
  selector: 'app-list-solicitacao',
  templateUrl: './list-solicitacao.component.html',
  styleUrls: ['./list-solicitacao.component.css']
})
export class ListSolicitacaoComponent implements OnInit, OnChanges {

    @Input() solicitacoes: Solicitacao[];
    page: number = 1;

  constructor() { }

  ngOnInit() { }

  showDetail(event) {

    if (!(event.showDetail.trim() === "show")){
      this.solicitacoes.forEach(solicitacao => {
        solicitacao.showDetail = "hidden";
        solicitacao.showTd = "show";
      });
    }

    if (event.showTd.trim() === "show"){
      event.showTd = "hidden";
      event.showDetail = "show";
    } else {
      event.showTd = "show";
      event.showDetail = "hidden";
    }

  }

  ngOnChanges(){ }

}
