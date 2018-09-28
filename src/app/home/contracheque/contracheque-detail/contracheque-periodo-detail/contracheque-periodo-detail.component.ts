import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Contracheque } from '../../../../models/contracheque';
import { ContrachequeEnum } from '../../../../models/contracheque.enum';

@Component({
  selector: 'app-contracheque-periodo-detail',
  templateUrl: './contracheque-periodo-detail.component.html',
  styleUrls: ['./contracheque-periodo-detail.component.css']
})
export class ContrachequePeriodoDetailComponent implements OnInit, OnChanges {

  @Input() contracheques: Contracheque[] = [];
  page: number = 1;
  totalLiquido: number = 0;
  totalDesconto: number = 0;
  totalBruto: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

    this.contracheques.sort(a => a.descricao.toUpperCase().trim() === ContrachequeEnum.vencimento ? -1 : 1);
    this.contracheques.forEach(c => {
      this.totalBruto += parseFloat(c.valor.toString());
      if(c.descricao.trim() === ContrachequeEnum.desconto){
        this.totalDesconto += parseFloat(c.valor.toString());
      }
    });
    this.totalBruto.toPrecision(2);
    this.totalLiquido.toPrecision(2);
    this.totalLiquido = this.totalBruto - this.totalDesconto;

  }

}
