import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { upperCase, lowerCase, containNumber } from 'src/app/validators/password.validator';
import { equal } from 'src/app/validators/createPassword.validator';
import { AlterarDadosAdminService } from 'src/app/services/alterarDados/alterar-dados-admin.service';
import { ListaUsuariosService } from 'src/app/services/listaUsuarios/lista-usuarios.service';

@Component({
  selector: 'app-modal-lista-usuarios',
  templateUrl: './modal-lista-usuarios.component.html',
  styleUrls: ['./modal-lista-usuarios.component.css']
})
export class ModalListaUsuariosComponent implements OnInit {

  @Input() user: any;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<string>();
  @Output() altr = new EventEmitter<any>();
  type = "password";
  formResponder: FormGroup;
  message: string = '';
  showMessage: boolean = false;
  showLoader: boolean = false;
  

  constructor(private meuForm: FormBuilder, private alterarDados: AlterarDadosAdminService, 
    private listaUsuariosAdminService: ListaUsuariosService) { }

  toggleState() {

    this.showMessage = false;
    this.message = '';
    this.formResponder.markAsUntouched();
    this.toggle.emit(false);
  }


  ngOnInit() {

    console.log(this.user);
      this.formResponder = this.meuForm.group({
        id: [this.user.id],
        name: [this.user.name, Validators.compose(
          [Validators.required]
        )],
        email: [this.user.email, Validators.compose(
          [Validators.email, Validators.required]
        )],
          password: ["", [
            Validators.minLength(6),
            Validators.maxLength(14),
            upperCase,
            lowerCase,
            containNumber
          ]
        ],
          confirmeSenha: [""],
      });

    this.formResponder.setValidators([ equal ]);
  }

  alterarDadosUserAdm(event, usuario) {

      event.preventDefault();

      this.alterarDados.alterarDadosUsuarioAdmin(usuario)
        .subscribe(data => {
          this.success.emit("Alteração de dados realizada com sucesso!");
          this.toggle.emit(false);
          this.altr.emit("sucesso");
        },
        error => {
          this.message = "Erro ao alterar dados!";
          this.showMessage = true;
        }
      );
  }
}
