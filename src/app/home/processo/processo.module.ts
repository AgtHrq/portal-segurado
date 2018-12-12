import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ProcessoComponent } from './processo.component';
import { MaskCampoPipe } from './campo-cpf.pipe';
import { LoaderModule } from '../../loader/loader.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminSolicitacaoModule } from 'src/app/admin/admin-solicitacao/admin-solicitacao.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    LoaderModule,
    NgxPaginationModule,
    AdminSolicitacaoModule
  ],
  declarations: [
    ProcessoComponent,
    MaskCampoPipe
  ]
})
export class ProcessoModule { }
