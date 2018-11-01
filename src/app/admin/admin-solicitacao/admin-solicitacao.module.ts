import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminSolicitacaoComponent } from './admin-solicitacao.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { ListarSolicitacaoComponent } from './listar-solicitacao/listar-solicitacao.component';
import { ResponderSolicitacaoComponent } from './responder-solicitacao/responder-solicitacao.component';
import { LoaderModule } from 'src/app/loader/loader.module';
import { ListaSolicitacaoFechedaComponent } from './lista-solicitacao-fecheda/lista-solicitacao-fecheda.component';
import { SolicitacaoModule } from 'src/app/home/solicitacao/solicitacao.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSubmenuModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    SolicitacaoModule
  ],
  declarations: [
    AdminSolicitacaoComponent,
    ListarSolicitacaoComponent,
    ResponderSolicitacaoComponent,
    ListaSolicitacaoFechedaComponent
  ]
})
export class AdminSolicitacaoModule { }
