import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { saveAs } from 'file-saver';
import { ContrachequeService } from './../../../../services/contracheque/contracheque.service';
import { Cabecalho } from './../../../../models/cabecalho';
import { Contracheque } from '../../../../models/contracheque';
import { ContrachequeEnum } from '../../../../models/contracheque.enum';
import { VinculoModel } from 'src/app/models/vinculo-model';

@Component({
  selector: 'app-contracheque-periodo-detail',
  templateUrl: './contracheque-periodo-detail.component.html',
  styleUrls: ['./contracheque-periodo-detail.component.css']
})
export class ContrachequePeriodoDetailComponent implements OnInit, OnChanges {

  @Input() contracheques: Contracheque[] = [];
  @Input() vinculo: VinculoModel;
  totalLiquido: number = 0;
  totalDesconto: number = 0;
  totalBruto: number = 0;
  cabecalho: Cabecalho;
  fileUrl;
  showLoader: boolean = false;

  constructor(private contrachequeService: ContrachequeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  gerarPdf(){

    this.showLoader = true;

    this.cabecalho = new Cabecalho(this.getMatricula(this.vinculo.idVinculo), this.contracheques[0].ano_referencia, 
      this.contracheques[0].mes_referencia, this.vinculo.idVinculo, this.vinculo.cargo, this.vinculo.orgao, this.vinculo.tipoVinculo);
    console.log(this.cabecalho);

    this.contrachequeService.getPdf(this.cabecalho).subscribe(
      r => {
        this.showLoader = false;
        let pdf = new Blob([r.blob()], { type: 'aplication/pdf; attachement=contracheque.pdf' });
        saveAs(pdf, 'contracheque.pdf');
      },
      error => {
        this.showLoader = false;
      }
    );
  }

  ngOnChanges(){

    this.contracheques.sort(a => a.descricao.toUpperCase().trim() === ContrachequeEnum.vencimento ? -1 : 1);
    this.contracheques.forEach(c => {
      this.totalBruto += parseFloat(c.valor.toString());
      if(c.descricao.trim().toUpperCase() === ContrachequeEnum.desconto){
        this.totalDesconto += parseFloat(c.valor.toString());
      }
    });
    this.totalLiquido = this.totalBruto - this.totalDesconto;

  }

  getMatricula(idVinculo: string): string{;

    return idVinculo.substr(11);
  }

}