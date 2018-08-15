import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoComponent } from './solicitacao.component';
import { NewSolicitacaoComponent } from './new-solicitacao/new-solicitacao.component';
import { ListSolicitacaoComponent } from './list-solicitacao/list-solicitacao.component';
import { DetailSolicitacaoComponent } from './detail-solicitacao/detail-solicitacao.component';
import { NgxPaginationModule } from '../../../../node_modules/ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    SolicitacaoComponent,
    NewSolicitacaoComponent,
    ListSolicitacaoComponent,
    DetailSolicitacaoComponent
  ]
})
export class SolicitacaoModule { }
