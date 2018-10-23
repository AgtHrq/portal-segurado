import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SolicitacaoService } from './../../../services/solicitacao/solicitacao.service';
import { Solicitacao } from 'src/app/models/solicitacao';

@Component({
  selector: 'app-responder-solicitacao',
  templateUrl: './responder-solicitacao.component.html',
  styleUrls: ['./responder-solicitacao.component.css']
})
export class ResponderSolicitacaoComponent implements OnInit {

  @Input() solicitacao: Solicitacao;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<string>();
  formResponder: FormGroup;
  message: string = '';
  showMessage: boolean = false;

  constructor(private fb: FormBuilder, private solicitacaoService: SolicitacaoService) { }

  toggleState() {

    this.showMessage = false;
    this.message = '';
    this.formResponder.markAsUntouched();
    this.toggle.emit(false);

  }

  responderSolicitacao(event, data){

    event.preventDefault();
    data.id = this.solicitacao.id;
    this.solicitacaoService.responderSolicitacaoAdmin(data).subscribe(
      () => this.success.emit('Solicitação respondida com sucesso'),
      () => this.message = 'Erro ao responder! Tente novamente em caso de persistir o error entre em contato com a informática.'
    )

  }

  ngOnInit() {

    this.formResponder = this.fb.group({

      resposta: ['', Validators.required]

    })

  }

}
