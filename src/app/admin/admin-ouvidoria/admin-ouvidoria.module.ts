import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminOuvidoriaComponent } from './admin-ouvidoria.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { ListarOuvidoriaComponent } from './listar-ouvidoria/listar-ouvidoria.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListarOuvidoriaRespondidaComponent } from './listar-ouvidoria-respondida/listar-ouvidoria-respondida.component';
import { AdminSolicitacaoModule } from '../admin-solicitacao/admin-solicitacao.module';
import { LoaderModule } from 'src/app/loader/loader.module';
import { DetailOuvidoriaComponent } from './listar-ouvidoria-respondida/detail-ouvidoria/detail-ouvidoria.component';
import { ResponderOuvidoriaComponent } from './listar-ouvidoria/responder-ouvidoria/responder-ouvidoria.component';

@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AdminSolicitacaoModule,
    LoaderModule
  ],
  declarations: [
    AdminOuvidoriaComponent,
    ListarOuvidoriaComponent,
    DetailOuvidoriaComponent,
    ResponderOuvidoriaComponent,
    ListarOuvidoriaRespondidaComponent    
  ]
})
export class AdminOuvidoriaModule { }
