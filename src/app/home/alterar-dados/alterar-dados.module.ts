import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlterarDadosComponent } from './alterar-dados.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarDadosComponent],
  exports: [AlterarDadosComponent]
})
export class AlterarDadosModule { }
