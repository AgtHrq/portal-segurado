import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterarDadosComponent } from './alterar-dados.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [AlterarDadosComponent],
  exports: [AlterarDadosComponent]
})
export class AlterarDadosModule { }
