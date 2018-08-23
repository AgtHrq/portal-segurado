import { Component, OnInit, Input } from '@angular/core';
import { Solicitacao } from '../../../models/solicitacao';

@Component({
  selector: 'app-detail-solicitacao',
  templateUrl: './detail-solicitacao.component.html',
  styleUrls: ['./detail-solicitacao.component.css']
})
export class DetailSolicitacaoComponent implements OnInit {

  @Input() solicitacao: Solicitacao;

  constructor() { }

  ngOnInit() { }

}
