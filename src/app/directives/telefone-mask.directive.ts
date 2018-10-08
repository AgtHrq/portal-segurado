import { Directive, HostListener, ElementRef } from '@angular/core';

import { MaskUtils } from './../utils/mask-utils';

@Directive({
  selector: '[appTelefoneMask]'
})
export class TelefoneMaskDirective {

  constructor(private maskUtils: MaskUtils, private el: ElementRef) { }

  @HostListener('keypress') onkeypress() {

    this.maskUtils.telMask(this.el);
    
  }

}
