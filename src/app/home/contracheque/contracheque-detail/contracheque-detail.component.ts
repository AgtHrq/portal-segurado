import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';

import { HomeUtils } from '../../../utils/home-utils';
import { Vinculo } from '../../../models/vinculo';

@Component({
  selector: 'app-contracheque-detail',
  templateUrl: './contracheque-detail.component.html',
  styleUrls: ['./contracheque-detail.component.css']
})
export class ContrachequeDetailComponent implements AfterViewInit, OnChanges {

  @Input() vinculo: Vinculo = new Vinculo();
  page: number = 1;

  constructor(private utils: HomeUtils) { }

  deactivate() {
    
    this.vinculo.periodos.forEach( c => {
      c.activate = false;
    });
    
  }

  ngOnChanges() {
    if(this.vinculo.periodos != null) {
      this.vinculo.periodos.sort((a, b) => a.anoReferencia < b.anoReferencia ? 1 : -1);
      this.vinculo.periodos.sort((a, b) => ((a.anoReferencia < b.anoReferencia) && (a.mesReferencia < b.mesReferencia)) ? 1 : -1);
      this.vinculo.periodos.forEach(p => {
        p.contracheque = [];
        this.vinculo.contracheques.forEach(c => {
          if (p.anoReferencia === c.ano_referencia && p.mesReferencia === c.mes_referencia){
            p.contracheque.push(c);
          }
        });
      });
    }
  }

  ngAfterViewInit() {

    this.utils.contracheque();

  }

}
