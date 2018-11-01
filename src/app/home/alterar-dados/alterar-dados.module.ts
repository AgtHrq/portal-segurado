import { DirectivesModule } from './../../directives/directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlterarDadosComponent } from './alterar-dados.component';
import { LoaderModule } from 'src/app/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    LoaderModule
  ],
  declarations: [AlterarDadosComponent],
  exports: [AlterarDadosComponent]
})
export class AlterarDadosModule { }
