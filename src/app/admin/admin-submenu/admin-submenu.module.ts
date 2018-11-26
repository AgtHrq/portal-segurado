import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSubmenuComponent } from './admin-submenu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminSubmenuComponent
  ],
  exports: [
    AdminSubmenuComponent
  ]
})
export class AdminSubmenuModule { }
