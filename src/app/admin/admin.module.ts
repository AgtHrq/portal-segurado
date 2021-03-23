import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { HomeModule } from '../home/home.module';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminSubmenuModule } from './admin-submenu/admin-submenu.module';
import { AdminSolicitacaoModule } from './admin-solicitacao/admin-solicitacao.module';
import { AdminNotificacaoModule } from './admin-notificacao/admin-notificacao.module';
import { AdminUploadModule } from './admin-upload/admin-upload.module';
import { AdminSeguradoModule } from './admin-segurado/admin-segurado.module';
import { AdminDirfModule } from './admin-dirf/admin-dirf.module';
import { AdminCarregarDadosModule } from './admin-carregar-dados/admin-carregar-dados.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    AdminHomeModule,
    AdminSubmenuModule,
    AdminSolicitacaoModule,
    AdminNotificacaoModule,
    AdminUploadModule,
    AdminSeguradoModule,
    AdminDirfModule,
    AdminCarregarDadosModule
  ],
  declarations: [
    AdminComponent, 
    AdminMenuComponent
  ]
})
export class AdminModule { }
