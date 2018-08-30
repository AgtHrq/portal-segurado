import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';
import { SolicitacaoService } from '../../../services/solicitacao/solicitacao.service';
import { TipoSolicitacao } from '../../../models/tipo-solicitacao';

@Component({
  selector: 'app-new-solicitacao',
  templateUrl: './new-solicitacao.component.html',
  styleUrls: ['./new-solicitacao.component.css'],
  animations: [
    trigger('flyInOut', [
      state('active', style({ transform: 'scale(1, 1)' })),
      transition('inactive => active', [
        style({ transform: 'scale(0, 0)' }),
        animate(300)
      ])
    ])
  ]
})
export class NewSolicitacaoComponent implements OnInit {

  user: User;
  @Input() state: string = "inactive";
  @Output() classEmitter = new EventEmitter<string>();
  @Output() stateEmitter = new EventEmitter<string>();
  @Output() solicitacaoAdded = new EventEmitter();
  tipoSolicitacao: TipoSolicitacao[];
  formNovaSolicitacao: FormGroup;
  showLoader: boolean = false;
  showMessage: boolean = false;
  success: boolean = false;
  message: string = "";
  numCaracteres: number = 255;

  constructor(private userService: UserService, private solicitacaoService: SolicitacaoService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userService.getLoggedUser()
      .subscribe(user => this.user = user);

    this.solicitacaoService.getTipoSolicitacao()
      .subscribe(
        tipoSolicitacao => {
          this.tipoSolicitacao = tipoSolicitacao.json() as TipoSolicitacao[];
        }
      )
      
    this.formNovaSolicitacao = this.formBuilder.group({
      cpf: [this.user.user_cpf, Validators.required],
      descricao: ["", Validators.compose(
        [
          Validators.required, 
          Validators.maxLength(255)
        ]
      )],
      tipoSolicitacao: this.formBuilder.group({
        id: ["", Validators.required],
        descricao: [""]
      })
    });

  }

  newSolicitacao(event, data) {

    event.preventDefault();
    this.showLoader = true;
    this.solicitacaoService.addSolicitacao(data)
      .subscribe(data => {
        this.showLoader = false;
        this.showMessage = true;
        this.message = "Solicitação aberta com sucesso";
        this.success = true;
        this.solicitacaoAdded.emit();
        this.limpaCampos();
      },
      error => {
        this.showLoader = false;
        this.showMessage = true;
        this.message = error._body;
        this.success = false;
        this.message = error._body;
        console.log(this.message);
      }
    );

  }

  emitter(classCss: string, state: string) {

    this.classEmitter.emit(classCss);
    this.stateEmitter.emit(state);

  }

  limpaCampos() {

    this.formNovaSolicitacao.get("descricao").setValue("");
    this.formNovaSolicitacao.get("tipoSolicitacao").get("id").setValue("");
    this.numCaracteres = 255;

  }

  setDescricao(event) {

    this.tipoSolicitacao.forEach(g => {
      if(g.id === event.target.value){
        this.formNovaSolicitacao.get('tipoSolicitacao').get('descricao').setValue(g.descricao);
      }
    });
    
  }

}
