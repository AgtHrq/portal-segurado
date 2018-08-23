import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OuvidoriaComponent } from './ouvidoria.component';
import { RespotaComponent } from './respota/respota.component';
import { AddOuvidoriaComponent } from './add-ouvidoria/add-ouvidoria.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [
    OuvidoriaComponent, 
    RespotaComponent, 
    AddOuvidoriaComponent, 
    InitialComponent
  ]
})
export class OuvidoriaModule { }
