import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Solicitacao } from '../../../models/solicitacao';

@Component({
  selector: 'app-detail-solicitacao',
  templateUrl: './detail-solicitacao.component.html',
  styleUrls: ['./detail-solicitacao.component.css']
})
export class DetailSolicitacaoComponent implements OnInit, OnChanges {

  @Input() solicitacao: Solicitacao;
  resposta: boolean;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(){
    
    this.solicitacao.resposta != null ? this.resposta = true : this.resposta = false;

  }

}
