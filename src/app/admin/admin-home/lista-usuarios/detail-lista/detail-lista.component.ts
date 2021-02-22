import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { upperCase, lowerCase, containNumber } from 'src/app/validators/password.validator';
import { equal } from 'src/app/validators/createPassword.validator';
import { AlterarDadosAdminService } from 'src/app/services/alterarDados/alterar-dados-admin.service';
import { ListaUsuariosService } from 'src/app/services/listaUsuarios/lista-usuarios.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserRole } from '../../../../models/user-role.enum';



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
  showModal: boolean = false;
  showMessage: boolean = false;
  messageInfo: string = '';
  showMessageInfo: boolean = false;
  showButton: boolean = true;
  erroMessage: string = '';
  showBlockedMessage: boolean = false;
  erroTitle: string = 'Usuario Bloqueado';

  constructor(private formBuilder: FormBuilder, private listarUsuariosAdminService: ListaUsuariosService, 
    private router: Router, private userService: UserService, private alterarDados: AlterarDadosAdminService) { }

  alteraDados(user){
    console.log(this.user);
    this.showModal = !this.showModal;
  }

  acessarPerfilSegurado(cpf){

    this.userService.authenticateByAdm(cpf).subscribe(
      data => {
         // this.showLoader = false;
          this.userService.updateLoggedUser(data.text());
          this.userService.getLoggedUser().subscribe(user => {
              user as User;
              // if (user.user_role.trim() === UserRole.super_admin || user.user_role.trim() === UserRole.admin){
              //     this.route.navigate(['/admin']);
              // } else {
                  this.router.navigate(['/home/segurado']);
              //}
          });
      },
      erro => {
           if(erro._body){
          //     if(erro._body.trim().toUpperCase() == 'TERMOS ATUALIZADOS'){
                  
          //         this.termos.formConfirm.get('cpf').setValue(credentials.cpf);
          //         this.showModal = true;
          //         this.showLoader = false;
          //         return;
          //     }
          //     this.showLoader = false;
               this.erroMessage = erro._body;
               this.showBlockedMessage = true;
          //     this.showMessage = true;
          // } else {
          //     this.showLoader = false;
           }
          
      }
  );


  }

  showbutton(userRole){
    // console.log(userRole);
    if(userRole === UserRole.segurado){
      return true;
    }else{
      return false;
    }
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
