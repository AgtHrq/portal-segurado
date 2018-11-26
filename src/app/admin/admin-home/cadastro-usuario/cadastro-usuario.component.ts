import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { CadastrarAdmService } from '../../../services/cadastrarAdm/cadastrarAdm.service';
import { upperCase, lowerCase, containNumber} from '../../../validators/password.validator';
import { equal } from '../../../validators/createPassword.validator';
import { MaskUtils } from '../../../utils/mask-utils';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  meuForm: FormGroup;
  type = "password";
  nome: string;
  cpf: string;
  email: string;
  showMessage: boolean = false;
  success: boolean = false;
  showLoader: boolean = false;
  message: string = "";

  constructor(private formBuilder: FormBuilder, private maskUtils: MaskUtils,
    private cadastrarAdmService: CadastrarAdmService, private router: Router,
    private userService: UserService) {}

  ngOnInit() {

    this.meuForm = this.formBuilder.group({
      cpf: ["", Validators.compose(
          [Validators.minLength(14), Validators.required]
      )],
      name: ["", Validators.compose(
        [Validators.required]
      )],
      email: ["", Validators.compose(
        [Validators.email, Validators.required]
      )],
      password: ["", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14),
        upperCase,
        lowerCase,
        containNumber
      ]
    ],
      confirmeSenha: [],
    });

    this.meuForm.setValidators([ equal ]);
    this.maskUtils.cpfMask("cpf");
  }
  
  cadastraAdm(event, usuario) {

    event.preventDefault();
    this.showLoader = true;
    usuario.cpf = usuario.cpf.replace(/\.|\-/gi, "");
    delete(usuario.confirmeSenha);

    this.cadastrarAdmService.cadastrarAdm(usuario)
      .subscribe(() => {
        this.showLoader = false;
        this.showMessage = true;
        this.success = true;
        this.message = "Cadastro realizado com sucesso!";
      },
      error => {
        this.showLoader = false;
        this.showMessage = true;
        this.success = false;
        this.message = error._body;
          if (error.json().message.trim() === "Invalid Token") {
            this.userService.logoffUser();
            this.router.navigate(['/']);
          }
      }
    )
  }
}
