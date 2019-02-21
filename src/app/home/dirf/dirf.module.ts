import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirfComponent } from './dirf.component';
import { LoaderModule } from 'src/app/loader/loader.module';
import { AdminSolicitacaoModule } from 'src/app/admin/admin-solicitacao/admin-solicitacao.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    AdminSolicitacaoModule
  ],
  declarations: [DirfComponent]
})
export class DirfModule { }
