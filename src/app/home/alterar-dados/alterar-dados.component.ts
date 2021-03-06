import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../models/user';
import { MaskUtils } from '../../utils/mask-utils';
import { UserService } from 'src/app/services/user.service';
import { EmailValidator } from 'src/app/validators/email.validator';

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
export class AlterarDadosComponent implements OnInit {

  @Input() state: string = 'inactive';
  @Input() user: User;
  @Output() toggle = new EventEmitter<string>();
  formAlterarDados: FormGroup;
  showLoader: boolean = false;
  showMessage: boolean = false;
  message: string = '';
  typeMessage: string = '';
  tel: string = '';
  event: any;

  constructor(private formBuilder: FormBuilder, private maskUltil: MaskUtils, private userService: UserService, private emailValidator: EmailValidator) { }
  
  toggleState(state: string){

    this.toggle.emit(state);
    this.state = state;
    if(this.user.user_tel){
      this.user.user_tel = this.tel;
      this.user.user_tel = this.user.user_ddd + this.tel;
      this.user.user_tel = this.unmaskTel(this.user.user_tel);
      this.user.user_tel = this.maskTel();
    }
    this.formAlterarDados.get('email').setValue(this.user.user_email);
    this.formAlterarDados.get('telefone').setValue(this.user.user_tel);
    this.formAlterarDados.markAsUntouched();
    this.message = '';
    this.showMessage = false;
    this.event = '';

  }

  alterarDados(event, data) {

    event.preventDefault();
    this.showLoader = true;
    data.ddd = '';
    if(data.telefone){
      data.telefone = this.unmaskTel(data.telefone);
      data.ddd = this.getDDD(data.telefone);
      data.telefone = this.remeveDDD(data.telefone);
    } else {
      data.telefone = '';
    }
    data.cpf = this.maskUltil.removeMascara(data.cpf);
    this.userService.alterarDados(data).subscribe(tk => {
     
      this.userService.updateLoggedUser(tk.text());
      this.userService.getLoggedUser().subscribe(u => {
        this.user = u as User;
        data.telefone != '' ? this.tel = this.user.user_tel : '';
      });
      this.showLoader = false;
      this.showMessage = true;
      this.message = 'Dados atualizados com sucesso!';
      this.typeMessage = 'positive';

    },
      () => {
      
        this.showLoader = false;
        this.showMessage = true;
        this.message = 'Falha ao tentar atualizar os dados, tente novamente. Caso persista o erro abra uma solicitação informando o erro.';
        this.typeMessage = 'negative';

      }
    );

  }

  ngOnInit() { 
    
    if(this.user.user_tel){
      this.tel = this.user.user_tel;
      this.user.user_tel = this.user.user_ddd + this.tel;
    }

    (this.user.user_tel) ? this.user.user_tel = this.maskTel() : '';

    this.formAlterarDados = this.formBuilder.group({
      
      cpf: [this.maskUltil.addMascara(this.user.user_cpf.trim()), Validators.required],
      nome:[this.user.user_name.toLocaleUpperCase(), Validators.required],
      email: [this.user.user_email, {
        asyncValidators: [ this.emailValidator.validate.bind(this.emailValidator) ],
        validators: [ Validators.email ],
        updateOn: 'blur'
      }
      ],
      telefone: [this.user.user_tel, Validators.minLength(16)],
    });

  }

  maskTel(): string {

    return `(${this.user.user_tel.substr(0, 2)}) ${this.user.user_tel.substr(2, 1)} ${this.user.user_tel.substr(3, 4)}-${this.user.user_tel.substr(7, 4)}`;

  }

  unmaskTel(tel: string): string {

    return tel.replace(/\(|\)| |\-/gi, '');

  }

  remeveDDD(tel: string): string {

    return tel.substr(2, tel.length);

  }

  getDDD(tel: string): string {

    return tel.substr(0, 2);

  }

}
