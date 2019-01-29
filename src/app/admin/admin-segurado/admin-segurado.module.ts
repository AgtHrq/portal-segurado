import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoaderModule } from './../../loader/loader.module';
import { AdminSeguradoComponent } from './admin-segurado.component';
import { AddVinculoComponent } from './add-vinculo/add-vinculo.component';
import { EdtVinculoComponent } from './edt-vinculo/edt-vinculo.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { VinculoFormComponent } from './edt-vinculo/vinculo-form/vinculo-form.component';
import { AdminSolicitacaoModule } from '../admin-solicitacao/admin-solicitacao.module';

@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    AdminSolicitacaoModule,
    LoaderModule
  ],
  declarations: [
    AdminSeguradoComponent, 
    AddVinculoComponent, 
    EdtVinculoComponent, 
    VinculoFormComponent, 
  ]
})
export class AdminSeguradoModule { }
