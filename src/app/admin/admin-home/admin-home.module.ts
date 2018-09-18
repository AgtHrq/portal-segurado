import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSubmenuModule } from './../admin-submenu/admin-submenu.module';
import { AdminHomeComponent } from './admin-home.component';


@NgModule({
  imports: [
    CommonModule,
    AdminSubmenuModule,
    RouterModule
  ],
  declarations: [
    AdminHomeComponent
  ]
})
export class AdminHomeModule { }
