import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuvidoriaComponent } from './ouvidoria.component';
import { RespotaComponent } from './respota/respota.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OuvidoriaComponent, 
    RespotaComponent
  ]
})
export class OuvidoriaModule { }
