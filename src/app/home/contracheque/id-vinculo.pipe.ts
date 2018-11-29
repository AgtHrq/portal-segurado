import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idVinculo'
})
export class IdVinculoPipe implements PipeTransform {

  transform(idVinculo: string): string {
    return `${idVinculo.substring(11, 14)}.${idVinculo.substring(14, 17)}-${idVinculo.substring(17, 18)}`;
  }

}
