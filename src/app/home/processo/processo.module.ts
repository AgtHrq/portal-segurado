import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ProcessoComponent } from './processo.component';
import { MaskCpfPipe } from './mask-cpf.pipe';
import { LoaderModule } from '../../loader/loader.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    LoaderModule,
    NgxPaginationModule
  ],
  declarations: [
    ProcessoComponent,
    MaskCpfPipe
  ]
})
export class ProcessoModule { }
