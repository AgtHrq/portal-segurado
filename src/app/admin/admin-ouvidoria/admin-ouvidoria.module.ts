import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminOuvidoriaComponent } from './admin-ouvidoria.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { ListarOuvidoriaComponent } from './listar-ouvidoria/listar-ouvidoria.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailOuvidoriaComponent } from './listar-ouvidoria/detail-ouvidoria/detail-ouvidoria.component';
import { ResponderOuvidoriaComponent } from './listar-ouvidoria/detail-ouvidoria/responder-ouvidoria/responder-ouvidoria.component';

@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminOuvidoriaComponent,
    ListarOuvidoriaComponent,
    DetailOuvidoriaComponent,
    ResponderOuvidoriaComponent
  ]
})
export class AdminOuvidoriaModule { }
