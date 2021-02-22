import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSubmenuModule } from './../admin-submenu/admin-submenu.module';
import { AdminHomeComponent } from './admin-home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlterardadosUsuarioComponent } from './alterardados-usuario/alterardados-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoaderModule } from 'src/app/loader/loader.module';
import { ModalListaUsuariosComponent } from './lista-usuarios/detail-lista/modal-lista-usuarios/modal-lista-usuarios.component';
import { DetailListaComponent } from './lista-usuarios/detail-lista/detail-lista.component';
import { ErrorMessageModule } from 'src/app/error-message/error-message.module';
// import { HomeComponent } from './lista-usuarios/modal-lista-usuarios/modal-lista-usuarios.component';


@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    ErrorMessageModule,
  ],
  declarations: [
    AdminHomeComponent,
    CadastroUsuarioComponent,
    AlterardadosUsuarioComponent,
    ListaUsuariosComponent,
    ModalListaUsuariosComponent,
    DetailListaComponent,
    // HomeComponent
  ]
})
export class AdminHomeModule { }
