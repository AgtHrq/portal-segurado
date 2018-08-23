import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';

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
  formNovaSolicitacao: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userService.getLoggedUser()
      .subscribe(user => this.user = user);
      this.formNovaSolicitacao = this.formBuilder.group({
        titulo: ["", Validators.required],
        descricao: ["", Validators.required]
      });

  }

  newSolicitacao(event, data) {

    event.preventDefault();

  }

  emitter(classCss: string, state: string) {

    this.classEmitter.emit(classCss);
    this.stateEmitter.emit(state);

  }

  limpaCampos() {

    this.formNovaSolicitacao.get("titulo").setValue("");
    this.formNovaSolicitacao.get("descricao").setValue("");

  }

}
