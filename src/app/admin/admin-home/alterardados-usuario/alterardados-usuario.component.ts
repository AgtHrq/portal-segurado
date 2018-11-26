import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { upperCase, lowerCase, containNumber} from '../../../validators/password.validator';
import { equal } from '../../../validators/createPassword.validator';
import { UserService } from '../../../services/user.service';
import { AlterarDadosAdminService } from '../../../services/alterarDados/alterar-dados-admin.service';

@Component({
  selector: 'app-alterardados-usuario',
  templateUrl: './alterardados-usuario.component.html',
  styleUrls: ['./alterardados-usuario.component.css']
})
export class AlterardadosUsuarioComponent implements OnInit {
  meuForm: FormGroup;
  type = "password";
  email: string;
  senhaAtual: string = null;
  password: string = null;
  showMessage: boolean = false;
  success: boolean = false;
  showLoader: boolean = false;
  message: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router,
    private alterarDados: AlterarDadosAdminService, private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(
      user => {
        this.email = user.user_email;
      }
    )
    this.meuForm = this.formBuilder.group({

      email: [this.email, Validators.compose(
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
        confirmeSenha: [],

        senhaAtual: ["", [
            Validators.minLength(6),
            Validators.maxLength(14),
            upperCase,
            lowerCase,
            containNumber
          ]
        ],
    });

    this.meuForm.setValidators([ equal ]);
  }

  alterarDadosAdm(event, usuario) {

    event.preventDefault();
    if (usuario.senhaAtual == "") {
      usuario.senhaAtual = null;
    }
    if (usuario.password == "") {
      usuario.password = null;
    }
    this.showLoader = true;
    delete(usuario.confirmeSenha);

    this.alterarDados.alterarDadosAdmin(usuario)
      .subscribe(user => {
        this.showLoader = false;
        this.showMessage = true;
        this.success = true;
        this.message = "Informações alteradas com sucesso!"
        this.userService.updateLoggedUser(user.text());
      },
      error => {
        this.showLoader = false;
        this.showMessage = true;
        this.success = false;
          if (error.json().message.trim() === "Invalid Token") {
            this.userService.logoffUser();
            this.router.navigate(['/']);
          }
        }
    )
  }
}
