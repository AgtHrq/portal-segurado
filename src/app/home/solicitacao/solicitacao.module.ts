import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoComponent } from './solicitacao.component';
import { NewSolicitacaoComponent } from './new-solicitacao/new-solicitacao.component';
import { ListSolicitacaoComponent } from './list-solicitacao/list-solicitacao.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SolicitacaoComponent,
    NewSolicitacaoComponent,
    ListSolicitacaoComponent
  ]
})
export class SolicitacaoModule { }
