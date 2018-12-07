import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderModule } from 'src/app/loader/loader.module';
import { AdminUploadComponent } from './admin-upload.component';
import { UploadComponent } from './upload/upload.component';
import { AdminSubmenuModule } from '../admin-submenu/admin-submenu.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminSubmenuModule,
    LoaderModule,
    HttpClientModule
  ],
  declarations: [AdminUploadComponent, UploadComponent]
})
export class AdminUploadModule { }
