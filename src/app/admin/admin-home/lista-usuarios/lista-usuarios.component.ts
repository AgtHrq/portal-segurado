import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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
  usuarios: any;
  usuario: User = null;
  showMessage: boolean = false;
  scss: boolean = false;
  message: string = null;
  showModal: boolean = false;

  constructor(private formBuilder: FormBuilder, private listarUsuariosAdminService: ListaUsuariosService, 
    private router: Router, private userService: UserService, private alterarDados: AlterarDadosAdminService) { }

  ngOnInit() {
    
    this.listarUsuariosAdminService.listarUsuariosAdmin(null).subscribe(
      data => {
        this.usuarios = data.json();
      },
      error => {
        if (error._body === "Não existem usuarios cadastrados no sistema"){
          this.scss = false;
          this.message = error._body;
        } else if (error.json().message.trim() === "Invalid Token") {
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      }
    )
      
  }

  buscarCpf(cpf: string){
    console.log(cpf);
  }

  toggleState(usuario: User){
    this.usuario = usuario;
    usuario.showDetail = !usuario.showDetail;
  }
  

  bloquearDesbloquearUsuario(event, usuario){

      event.preventDefault();

      this.alterarDados.bloquearDesbloquearAdmin(usuario)
        .subscribe(data => {
          if (data.json().blocked == true) {
            this.showMessage = true;
            this.scss = true;
            this.message = "Usuario bloqueado com sucesso!"
          } else {
              this.showMessage = true;
              this.scss = true;
              this.message = "Usuario desbloqueado com sucesso!"
          }
        },
        error => {
          this.showMessage = true;
          this.scss = false;
          this.message = "Não foi possível desbloquear o usuário!"
        }
      )
  }

  
}
