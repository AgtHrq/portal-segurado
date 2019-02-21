import { AdminSolicitacaoModule } from 'src/app/admin/admin-solicitacao/admin-solicitacao.module';
import { LoaderModule } from 'src/app/loader/loader.module';
import { AdminSubmenuModule } from './../admin-submenu/admin-submenu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDirfComponent } from './admin-dirf.component';
import { UploadDirfComponent } from './upload-dirf/upload-dirf.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminSubmenuModule,
    LoaderModule,
    HttpClientModule,
    AdminSolicitacaoModule
  ],
  declarations: [
    AdminDirfComponent, 
    UploadDirfComponent
  ]
})
export class AdminDirfModule { }
