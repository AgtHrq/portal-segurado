import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Solicitacao } from './../../../models/solicitacao';
import { SolicitacaoService } from '../../../services/solicitacao/solicitacao.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-list-solicitacao',
  templateUrl: './list-solicitacao.component.html',
  styleUrls: ['./list-solicitacao.component.css']
})
export class ListSolicitacaoComponent implements OnInit, OnChanges {

    @Input() solicitacoes: Solicitacao[];
    @Input() user: User;
    @Output() atualizaLista = new EventEmitter();
    page: number = 1;
    showLoader: boolean = false;

  constructor(private solicitacaoService: SolicitacaoService) { }

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

  fecharSolicitacao(id: number) {

    this.showLoader = true;
    this.solicitacaoService.fecharSolicitacao(id)
      .subscribe(
        su => {
          this.showLoader = false;
          this.atualizaLista.emit();
        }, error => {
          this.showLoader = false;
        }
      );

  }

  ngOnChanges(){ 

    if(this.solicitacoes != null){

      this.solicitacoes.sort((a, b) => a.dataCriacao > b.dataCriacao ? -1 : 1);

    }

  }

}
