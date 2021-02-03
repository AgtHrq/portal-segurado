import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoaderModule } from './../../loader/loader.module';
import { AdminSeguradoComponent } from './admin-segurado.component';
import { EdtVinculoComponent } from './edt-vinculo/edt-vinculo.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { VinculoFormComponent } from './edt-vinculo/vinculo-form/vinculo-form.component';
import { AdminSolicitacaoModule } from '../admin-solicitacao/admin-solicitacao.module';
import { ErrorMessageModule } from 'src/app/error-message/error-message.module';

@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    AdminSolicitacaoModule,
    LoaderModule,
    ErrorMessageModule
  ],
  declarations: [
    AdminSeguradoComponent, 
    EdtVinculoComponent, 
    VinculoFormComponent, 
  ]
})
export class AdminSeguradoModule { }
