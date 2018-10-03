import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminNotificacaoComponent } from './admin-notificacao.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSubmenuModule
  ],
  declarations: [AdminNotificacaoComponent]
})
export class AdminNotificacaoModule { }
