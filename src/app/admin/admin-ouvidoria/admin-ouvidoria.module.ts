import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminOuvidoriaComponent } from './admin-ouvidoria.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';

@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule
  ],
  declarations: [
    AdminOuvidoriaComponent
  ]
})
export class AdminOuvidoriaModule { }
