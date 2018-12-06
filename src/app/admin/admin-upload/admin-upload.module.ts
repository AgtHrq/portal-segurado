import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUploadComponent } from './admin-upload.component';
import { UploadComponent } from './upload/upload.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSubmenuModule
  ],
  declarations: [AdminUploadComponent, UploadComponent]
})
export class AdminUploadModule { }
