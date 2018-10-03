import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminSubmenuComponent } from './admin-submenu/admin-submenu.component';
import { HomeModule } from '../home/home.module';
import { AdminOuvidoriaModule } from './admin-ouvidoria/admin-ouvidoria.module';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminSubmenuModule } from './admin-submenu/admin-submenu.module';
import { AdminSolicitacaoModule } from './admin-solicitacao/admin-solicitacao.module';
import { AdminNotificacaoModule } from './admin-notificacao/admin-notificacao.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    AdminHomeModule,
    AdminOuvidoriaModule,
    AdminSubmenuModule,
    AdminSolicitacaoModule,
    AdminNotificacaoModule
  ],
  declarations: [
    AdminComponent, 
    AdminMenuComponent
  ],
  exports: [
    AdminSubmenuComponent
  ]
})
export class AdminModule { }
