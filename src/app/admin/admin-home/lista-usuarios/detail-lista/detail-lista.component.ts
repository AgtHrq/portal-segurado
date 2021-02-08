import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { upperCase, lowerCase, containNumber } from 'src/app/validators/password.validator';
import { equal } from 'src/app/validators/createPassword.validator';
import { AlterarDadosAdminService } from 'src/app/services/alterarDados/alterar-dados-admin.service';
import { ListaUsuariosService } from 'src/app/services/listaUsuarios/lista-usuarios.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail-lista',
  templateUrl: './detail-lista.component.html',
  styleUrls: ['./detail-lista.component.css']
})
export class DetailListaComponent implements OnInit {

  @Input() user: any;
  @Output() usuaios: any
  usuario: User = null;
  usuarios: any;
  scss: boolean = false;
  type = "password";
  formResponder: FormGroup;
  message: string = '';
  showMaisInfo: boolean = false;
  showAlterarDados: boolean = false;
  showModal: boolean = false;
  showMessage: boolean = false;
  
  

  constructor(private formBuilder: FormBuilder, private listarUsuariosAdminService: ListaUsuariosService, 
    private router: Router, private userService: UserService, private alterarDados: AlterarDadosAdminService) { }

    alteraDados(user){
      console.log(this.user);
      this.showModal = !this.showModal;
    }

    maisInfo(user){
      console.log(this.user);
      this.showMaisInfo = !this.showMaisInfo;
    }

    eSegurado(user){
      if(this.user.role == "Segurado"){
        return true;
      }
      return false;
    }

    success(message: string) {
      
      this.message = message;
      this.showMessage = true;
    }
  

  ngOnInit() {
    
  }
  
  getListaAtualizada(event){
    this.listarUsuariosAdminService.listarUsuariosAdmin(null).subscribe(
      data => {
        this.usuarios = data.json();
      },
    )
  }

}
