import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { ListaUsuariosService } from 'src/app/services/listaUsuarios/lista-usuarios.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlterarDadosAdminService } from 'src/app/services/alterarDados/alterar-dados-admin.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  meuForm: FormGroup;
  nome: string;
  cpf: string;
  email: string;
  usuarios: User;
  showLoader: boolean = true;
  showMessage: boolean = false;
  success: boolean = false;
  message: string = null;
  
  constructor(private formBuilder: FormBuilder, private listarUsuariosAdminService: ListaUsuariosService, 
    private router: Router, private userService: UserService, private alterarDados: AlterarDadosAdminService) { }

  ngOnInit() {
      
    this.listarUsuariosAdminService.listarUsuariosAdmin(null).subscribe(
      data => {
        this.usuarios = data.json();
      },
      error => {
        if (error._body === "Não existem usuarios (admin) cadastrados no sistema"){
          this.showLoader = false;
        } else if (error.json().message.trim() === "Invalid Token") {
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      }
    )
      
  }

  bloquearDesbloquearUsuario(event, usuario){

      event.preventDefault();

      this.alterarDados.bloquearDesbloquearAdmin(usuario)
        .subscribe(data => {
          if (data.json().blocked == true) {
            this.showMessage = true;
            this.success = true;
            this.message = "Usuario bloqueado com sucesso!"
          } else {
              this.showMessage = true;
              this.success = true;
              this.message = "Usuario desbloqueado com sucesso!"
          }
        },
        error => {
          this.showMessage = true;
          this.success = false;
          this.message = "Não foi possível desbloquear o usuário!"
        }
      )
  }
}
