import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idVinculo'
})
export class IdVinculoPipe implements PipeTransform {

  transform(idVinculo: string): string {
    return idVinculo.substring(10, idVinculo.length);
  }

}
