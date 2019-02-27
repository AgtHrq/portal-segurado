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
  showLoader: boolean = false;
  showConfirmModal: boolean = false;
  totalCaracteres: number = 255;

  constructor(private fb: FormBuilder, private solicitacaoService: SolicitacaoService) { }

  toggleState() {

    this.showMessage = false;
    this.message = '';
    this.formResponder.markAsUntouched();
    this.toggle.emit(false);

  }

  confirm(event){

    event.preventDefault();
    this.showConfirmModal = true;

  }

  responderSolicitacao(event, data){

    this.showLoader = true;
    this.showConfirmModal = false;
    data.id = this.solicitacao.id;
    this.solicitacaoService.responderSolicitacaoAdmin(data).subscribe(
      () => {
        this.showLoader  = false;
        this.success.emit('Solicitação respondida com sucesso');
        this.toggle.emit(false);
      },
      () => {
        this.showMessage = true;
        this.message = 'Erro ao responder! Tente novamente em caso de persistir o error entre em contato com a informática.';
        this.showLoader  = false;
      }
    )

  }

  ngOnInit() {

    this.formResponder = this.fb.group({

      resposta: ['', Validators.required]

    })

  }

}
