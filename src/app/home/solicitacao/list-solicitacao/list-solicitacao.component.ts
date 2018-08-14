import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-solicitacao',
  templateUrl: './list-solicitacao.component.html',
  styleUrls: ['./list-solicitacao.component.css']
})
export class ListSolicitacaoComponent implements OnInit {

    solicitacoes: any = [{ titulo: "XXX", desc: "YYYYYYYYYY", data: "XXX", showDetail: "hidden", showTd: "show" },
     { titulo: "BBB", desc: "CCCCCCCCCC", data: "BBB", showDetail: "hidden", showTd: "show" }]

  constructor() { }

  ngOnInit() {
  }

  click(event) {

    if (event.showTd.trim() === "show"){
      event.showTd = "hidden";
      event.showDetail = "show";
    } else {
      event.showTd = "show";
      event.showDetail = "hidden";
    }

  }

}
