import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfMaskDirective } from './cpf-mask.directive';
import { TelefoneMaskDirective } from './telefone-mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CpfMaskDirective,
    TelefoneMaskDirective
  ],
  exports: [
    CpfMaskDirective,
    TelefoneMaskDirective
  ]
})
export class DirectivesModule { }
