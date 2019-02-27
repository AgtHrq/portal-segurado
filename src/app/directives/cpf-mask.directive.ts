import { OnInit, HostListener, HostBinding } from '@angular/core';
import { Directive } from '@angular/core';
import { MaskUtils } from '../utils/mask-utils';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective implements OnInit{
  
  private utils: MaskUtils = new MaskUtils();
  
  ngOnInit() {

    this.utils.cpfMask("cpf");
    this.utils.dtMask("dataNascimento");
    this.utils.dddMask("ddd");
    this.utils.celularMask("celular");
    this.utils.matriculaMask("matricula");
    this.utils.salarioMask('salario');
  }


  constructor() { }

}
