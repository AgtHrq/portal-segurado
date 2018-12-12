import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCampo'
})
export class MaskCampoPipe implements PipeTransform {

  transform(campo: string, tipoCampo: string): string | null {
    
    if(campo === null) {
    
      return null;
    }
    
    campo = campo.trim();
    return tipoCampo.toUpperCase() == 'CPF' ? `${campo.substring(0, 3)}.${campo.substring(3, 6)}.${campo.substring(6, 9)}-${campo.substring(9, 11)}` : 
      tipoCampo.toUpperCase() == 'MATRICULA' ? `${campo.substr(0, 3)}.${campo.substr(3, 3)}-${campo.substr(6)}` : campo;

  }

}
