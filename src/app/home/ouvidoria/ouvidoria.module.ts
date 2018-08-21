import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OuvidoriaComponent } from './ouvidoria.component';
import { RespotaComponent } from './respota/respota.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    OuvidoriaComponent, 
    RespotaComponent
  ]
})
export class OuvidoriaModule { }
