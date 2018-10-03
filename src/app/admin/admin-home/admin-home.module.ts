import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSubmenuModule } from './../admin-submenu/admin-submenu.module';
import { AdminHomeComponent } from './admin-home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule
  ],
  declarations: [
    AdminHomeComponent,
    CadastroUsuarioComponent
  ]
})
export class AdminHomeModule { }
