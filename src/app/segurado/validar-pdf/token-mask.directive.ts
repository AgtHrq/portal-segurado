import { Directive, ElementRef, HostListener } from '@angular/core';

import { MaskUtils } from 'src/app/utils/mask-utils';

@Directive({
  selector: '[appTokenMask]'
})
export class TokenMaskDirective {

  constructor(private utils: MaskUtils, private el: ElementRef) { }

  @HostListener('keyup') onkeyup(){
    this.utils.tokenMask(this.el.nativeElement.id);
  }
}
