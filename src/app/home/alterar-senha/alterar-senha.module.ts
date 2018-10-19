import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlterarSenhaComponent } from './alterar-senha.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
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
  declarations: [AlterarSenhaComponent],
  exports: [AlterarSenhaComponent]
})
export class AlterarSenhaModule { }
