import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Menu } from './../models/menu';
import { User } from '../models/user';
import { HomeUtils } from './../utils/home-utils';

@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  menus: Menu[] = [
    new Menu('Meus Processos', 'book', 'processos'), 
    new Menu('Contracheque', 'money bill alternate', 'contracheque'), 
    new Menu('Ficha Financeira', 'newspaper', 'ficha-financeira'),
    new Menu('Decl. de Imposto de Renda', 'laptop', 'dirf'), 
    new Menu('Solicitações', 'paper plane outline', 'solicitacoes')
  ];
  numNotificacoes: number = 0;
  filter: string = '';
  user$: Observable<User>;
  stateDados: string = 'inactive';
  stateSenha: string = 'inactive';
  mobile: boolean = false;
  activeMenu: boolean = true;
  // imgUrl = 'http://www.pbprev.pb.gov.br:6060/portalsegurado/assets/img/logo.png';
  imgUrl = 'http://localhost:8080/';
  // imgUrl = 'http://localhost/assets/img/logo.png';

  constructor(private userService : UserService, private utils: HomeUtils, private router: Router) {

    this.user$ = this.userService.getLoggedUser();
    this.utils.home();

   }

   toggleState(senha: boolean) {

    senha ? this.stateSenha.trim() === 'inactive' ? this.stateSenha = 'active' : this.stateSenha = 'inactive' : 
      this.stateDados.trim() === 'inactive' ? this.stateDados = 'active' : this.stateDados = 'inactive';

   }

   logout() {

    this.userService.logoffUser();
    this.router.navigate(['/']);

   }

   veioDeAdmin(){

    if(this.userService.getLastAdmin() == null){
      return false;
    }else{
      return true;
    }

   }

   voltarAdmin(){

    this.userService.authenticateAdmBySegurado(this.userService.getLastAdmin()).subscribe(
      data => {
         // this.showLoader = false;
          this.userService.updateLoggedUser(data.text());
          this.userService.getLoggedUser().subscribe(user => {
              user as User;
              // if (user.user_role.trim() === UserRole.super_admin || user.user_role.trim() === UserRole.admin){
                   this.router.navigate(['/admin']);
              // } else {
                  //this.router.navigate(['/home/segurado']);
              //}
          });
      },
      erro => {
          // if(erro._body){
          //     if(erro._body.trim().toUpperCase() == 'TERMOS ATUALIZADOS'){
                  
          //         this.termos.formConfirm.get('cpf').setValue(credentials.cpf);
          //         this.showModal = true;
          //         this.showLoader = false;
          //         return;
          //     }
          //     this.showLoader = false;
          //     this.erroMessage = erro._body;
          //     this.showMessage = true;
          // } else {
          //     this.showLoader = false;
          // }
          
      }
  );


   }

   @HostListener('window.resize')
   windowSize(){

    window.innerWidth <= 767 && (this.mobile = true);
   }

   ngOnInit(){

    this.windowSize();
   }

  ngAfterViewInit() {

    this.utils.home();

  }

}