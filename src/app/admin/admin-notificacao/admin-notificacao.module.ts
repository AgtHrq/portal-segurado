import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminNotificacaoComponent } from './admin-notificacao.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { CadastroNotificacaoComponent } from './cadastro-notificacao/cadastro-notificacao.component';
import { ExcluirNotificacaoComponent } from './excluir-notificacao/excluir-notificacao.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailExcluirNotificacaoComponent } from './excluir-notificacao/detail-excluir-notificacao/detail-excluir-notificacao.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSubmenuModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    AdminNotificacaoComponent, 
    CadastroNotificacaoComponent, ExcluirNotificacaoComponent, DetailExcluirNotificacaoComponent
  ]
})
export class AdminNotificacaoModule { }
