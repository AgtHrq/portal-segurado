import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orgaoAbv'
})
export class OrgaoAbvPipe implements PipeTransform {

  transform(orgao: string): string {

    return orgao.length > 7 ? `${orgao.substring(0, 7).toUpperCase()}...` : orgao.toUpperCase();
    
  }

}
