import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

import { MaskUtils } from './../utils/mask-utils';

@Directive({
  selector: '[appTelefoneMask]'
})
export class TelefoneMaskDirective implements OnInit {

  constructor(private maskUtils: MaskUtils, private el: ElementRef) { }

  ngOnInit() {

    this.maskUtils.telMask(this.el.nativeElement.id, this.el.nativeElement.value, 1);

  }

  @HostListener('keypress') onkeypress() {

    this.maskUtils.telMask(this.el.nativeElement.id, this.el.nativeElement.value);
    
  }

  @HostListener('keyup') onkeyup() {

    this.maskUtils.telMask(this.el.nativeElement.id, this.el.nativeElement.value);
    
  }

}
