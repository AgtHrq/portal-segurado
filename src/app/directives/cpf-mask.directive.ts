import { OnInit, HostListener, HostBinding } from '@angular/core';
import { Directive } from '@angular/core';
import { CpfUtils } from '../utils/cpf-utils';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective implements OnInit{
  
  
  ngOnInit() {

    this.utils.maskField("cpf");

  }

  private utils: CpfUtils = new CpfUtils();

  constructor() { }

}
