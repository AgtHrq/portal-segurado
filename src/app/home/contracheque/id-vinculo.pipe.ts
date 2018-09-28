import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idVinculo'
})
export class IdVinculoPipe implements PipeTransform {

  transform(idVinculo: string): string {
    return `${idVinculo.substring(10, 13)}.${idVinculo.substring(13, 16)}-${idVinculo.substring(16, 17)}`;
  }

}
