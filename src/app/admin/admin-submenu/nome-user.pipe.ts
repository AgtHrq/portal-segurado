import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeUser'
})
export class NomeUserPipe implements PipeTransform {

  transform(value: string): string {
    return `${value.trim().split(' ')[0].toUpperCase()}`;
  }

}
