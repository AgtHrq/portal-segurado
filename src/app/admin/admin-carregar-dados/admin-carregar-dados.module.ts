import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCarregarDadosComponent } from './admin-carregar-dados.component';
import { AdminSubmenuModule } from './../admin-submenu/admin-submenu.module';
import { LoaderModule } from 'src/app/loader/loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminSolicitacaoModule } from 'src/app/admin/admin-solicitacao/admin-solicitacao.module';
import { UploadDadosComponent } from './upload-dados/upload-dados.component';
import { UploadDados2Component } from './upload-dados2/upload-dados2.component';


@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    AdminSolicitacaoModule
  ],
  declarations: [AdminCarregarDadosComponent, UploadDadosComponent, UploadDados2Component]
})
export class AdminCarregarDadosModule { }
