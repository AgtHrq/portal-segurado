import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../models/user';
import { MaskUtils } from '../../utils/mask-utils';

@Component({
  selector: 'app-alterar-dados',
  templateUrl: './alterar-dados.component.html',
  styleUrls: ['./alterar-dados.component.css'],
  animations:[
    trigger('flyInOut', [
      state('inactive', style({ display: 'none' })),
      state('active', style({ transform: 'scale(1, 1)' })),
      transition('inactive => active', [
        style({ transform: 'scale(0, 0)' }),
        animate(300)
      ]),
      transition('active => inactive', [
        animate(300, style({ transform: 'scale(0, 0)' }))
      ])
    ])
  ]
})
export class AlterarDadosComponent implements OnInit, OnChanges {

  @Input() state: string = 'inactive';
  @Input() user: User;
  @Output() toggle = new EventEmitter<string>();
  formAlterarDados: FormGroup;

  constructor(private formBuilder: FormBuilder, private maskUltil: MaskUtils) { }
  
  toggleState(state: string){

    this.toggle.emit(state);
    this.state = state;
    this.formAlterarDados.markAsUntouched();

  }

  alterarDados(event, data) {

    event.preventDefault();

  }

  ngOnInit() { 

    this.formAlterarDados = this.formBuilder.group({
      
      cpf: [this.maskUltil.addMascara(this.user.user_cpf.trim()), Validators.required],
      email: [this.user.user_email, Validators.email],
      telefone: [this.user.user_tel, Validators.minLength(15)],
    });

  }

  ngOnChanges() { }

}
