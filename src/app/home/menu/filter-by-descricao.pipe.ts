import { Menu } from './../../models/menu';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescricao'
})
export class FilterByDescricaoPipe implements PipeTransform {

  transform(menus: Menu[], descricao: string) {
    
    descricao = descricao
      .trim()
      .toLocaleLowerCase();

      if (descricao) {

        return menus.filter(menu => menu.desc.toLocaleLowerCase().includes(descricao))

      } else {

        return menus;

      }

  }

}
