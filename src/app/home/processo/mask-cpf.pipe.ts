import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCpf'
})
export class MaskCpfPipe implements PipeTransform {

  transform(cpf: string): string | null {
    
    if(cpf === null) {
    
      return null;
    
    }
    
    cpf = cpf.trim();

    return  `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;

  }

}
