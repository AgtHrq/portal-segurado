import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { OuvidoriaComponent } from './ouvidoria.component';
import { RespostaComponent } from './resposta/resposta.component';
import { AddOuvidoriaComponent } from './add-ouvidoria/add-ouvidoria.component';
import { InitialComponent } from './initial/initial.component';
import { DatailOuvidoriaComponent } from './datail-ouvidoria/datail-ouvidoria.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxPaginationModule
  ],
  declarations: [
    OuvidoriaComponent, 
    RespostaComponent, 
    AddOuvidoriaComponent, 
    InitialComponent, DatailOuvidoriaComponent
  ]
})
export class OuvidoriaModule { }
