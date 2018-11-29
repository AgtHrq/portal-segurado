import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FichaFinanceiraComponent } from './ficha-financeira.component';
import { VizualizaFichaComponent } from './vizualiza-ficha/vizualiza-ficha.component';
import { ContrachequeModule } from '../contracheque/contracheque.module';
import { ImprimirFichaComponent } from './imprimir-ficha/imprimir-ficha.component';
import { AdminSolicitacaoModule } from 'src/app/admin/admin-solicitacao/admin-solicitacao.module';
import { FichaFinanceiraDetailComponent } from './vizualiza-ficha/ficha-financeira-detail/ficha-financeira-detail.component';
import { LoaderModule } from 'src/app/loader/loader.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ContrachequeModule,
    AdminSolicitacaoModule,
    LoaderModule
  ],
  declarations: [
    FichaFinanceiraComponent,
    VizualizaFichaComponent,
    ImprimirFichaComponent,
    FichaFinanceiraDetailComponent
  ]
})
export class FichaFinanceiraModule { }
