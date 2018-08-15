import { Component, OnInit, OnChanges } from '@angular/core';

import { Solicitacao } from './../../../models/solicitacao';

@Component({
  selector: 'app-list-solicitacao',
  templateUrl: './list-solicitacao.component.html',
  styleUrls: ['./list-solicitacao.component.css']
})
export class ListSolicitacaoComponent implements OnInit, OnChanges {

    solicitacoes1: any = [{ titulo: "XXX", desc: "YYYYYYYYYY", data: "XXX", showDetail: "hidden", showTd: "show" },
     { titulo: "BBB", desc: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
     { titulo: "BBB", desc: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
     { titulo: "BBB", desc: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
     { titulo: "BBB", desc: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" },
     { titulo: "BBB", desc: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" }];
    solicitacoes: Solicitacao[];
    page: number = 1;

  constructor() { }

  ngOnInit() {

    this.solicitacoes = this.solicitacoes1 as Solicitacao[];
    
  }

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
