import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';
import { MaskUtils } from 'src/app/utils/mask-utils';
import { upperCase, lowerCase, containNumber, equal } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css'],
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
export class AlterarSenhaComponent implements OnInit {

  @Input() state: string = 'inactive';
  @Input() user: User;
  @Output() toggle = new EventEmitter<string>();
  formAlterarSenha: FormGroup;
  typeOldPass: String = "password";
  typeNewPass: String = "password";
  typeConfirmPass: String = "password";
  iconOld: String = "eye link icon";
  iconNew: String = "eye link icon";
  iconConfirm: String = "eye link icon";

  constructor(private formBuilder: FormBuilder, private maskUltil: MaskUtils) { }

  toggleState(state: string){

    this.toggle.emit(state);
    this.state = state;
    this.formAlterarSenha.get("senhaAntiga").setValue("");
    this.formAlterarSenha.get("newPassword").setValue("");
    this.formAlterarSenha.get("confirmPassword").setValue("");
    this.formAlterarSenha.markAsUntouched();

  }

  alterarSenha(event, data) {

    event.preventDefault();

  }

  ngOnInit() { 

    this.formAlterarSenha = this.formBuilder.group({
      
      senhaAntiga: ["", Validators.compose(
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(14)
        ]
      )],
      newPassword: ["", Validators.compose([
        upperCase,
        lowerCase,
        containNumber,
        Validators.minLength(6),
        Validators.maxLength(14),
        Validators.required
      ])
      ],
      confirmPassword: ["", Validators.required]

    });

    this.formAlterarSenha.setValidators([ equal ]);

  }

}
