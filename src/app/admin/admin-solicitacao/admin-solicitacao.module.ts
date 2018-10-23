import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminSolicitacaoComponent } from './admin-solicitacao.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { ListarSolicitacaoComponent } from './listar-solicitacao/listar-solicitacao.component';
import { ResponderSolicitacaoComponent } from './responder-solicitacao/responder-solicitacao.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSubmenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminSolicitacaoComponent,
    ListarSolicitacaoComponent,
    ResponderSolicitacaoComponent
  ]
})
export class AdminSolicitacaoModule { }
