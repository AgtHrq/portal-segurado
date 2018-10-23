import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Solicitacao } from 'src/app/models/solicitacao';

@Component({
  selector: 'app-responder-solicitacao',
  templateUrl: './responder-solicitacao.component.html',
  styleUrls: ['./responder-solicitacao.component.css']
})
export class ResponderSolicitacaoComponent implements OnInit {

  @Input() solicitacao: Solicitacao;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  toggleState() {

    this.toggle.emit(false);
    
  }

  ngOnInit() {
  }

}
