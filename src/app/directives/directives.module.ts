import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CpfMaskDirective],
  exports: [CpfMaskDirective]
})
export class DirectivesModule { }
