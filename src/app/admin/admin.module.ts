import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, AdminMenuComponent]
})
export class AdminModule { }
