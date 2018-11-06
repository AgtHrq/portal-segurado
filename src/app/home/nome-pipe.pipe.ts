import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomePipe'
})
export class NomePipePipe implements PipeTransform {

  transform(nome: string): string {
    
    return nome.trim().split(' ')[0].toLocaleUpperCase();

  }

}
