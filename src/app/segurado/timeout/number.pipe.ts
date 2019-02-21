import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: number): string {

    if (value < 10){ return `0${value}` }
    return value + '';
  }

}
