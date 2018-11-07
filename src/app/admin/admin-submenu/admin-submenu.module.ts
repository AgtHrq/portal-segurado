import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSubmenuComponent } from './admin-submenu.component';
import { NomeUserPipe } from './nome-user.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminSubmenuComponent,
    NomeUserPipe
  ],
  exports: [
    AdminSubmenuComponent
  ]
})
export class AdminSubmenuModule { }
