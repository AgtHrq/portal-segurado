import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSolicitacaoComponent } from './admin-solicitacao.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSubmenuModule
  ],
  declarations: [
    AdminSolicitacaoComponent
  ]
})
export class AdminSolicitacaoModule { }
