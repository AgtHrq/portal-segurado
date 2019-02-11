import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfMaskDirective } from './cpf-mask.directive';
import { TelefoneMaskDirective } from './telefone-mask.directive';
import { CloseModalDirective } from './close-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CpfMaskDirective,
    TelefoneMaskDirective,
    CloseModalDirective
  ],
  exports: [
    CpfMaskDirective,
    TelefoneMaskDirective,
    CloseModalDirective
  ]
})
export class DirectivesModule { }
