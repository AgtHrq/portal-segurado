import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminSubmenuComponent } from './admin-submenu/admin-submenu.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminComponent, 
    AdminMenuComponent, 
    AdminSubmenuComponent, AdminHomeComponent
  ]
})
export class AdminModule { }