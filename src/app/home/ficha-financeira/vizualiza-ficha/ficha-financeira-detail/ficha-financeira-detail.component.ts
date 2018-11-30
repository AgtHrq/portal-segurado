import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HomeUtils } from '../../../../utils/home-utils';
import { FichaFinanceira } from 'src/app/models/FichaFinanceira';

@Component({
  selector: 'app-ficha-financeira-detail',
  templateUrl: './ficha-financeira-detail.component.html',
  styleUrls: ['./ficha-financeira-detail.component.css']
})
export class FichaFinanceiraDetailComponent implements OnInit {

  @Input() fichas: FichaFinanceira[];
  mes: string = 'Jan';
  totalBruto: number = 0;
  totalLiquido: number = 0;
  totalDesconto: number = 0;
  meses = [
    {nomeMes: 'Jan', activate: true}, 
    {nomeMes: 'Fev', activate: false}, 
    {nomeMes: 'Mar', activate: false},
    {nomeMes: 'Abr', activate: false},
    {nomeMes: 'Mai', activate: false},
    {nomeMes: 'Jun', activate: false},
    {nomeMes: 'Jul', activate: false},
    {nomeMes: 'Ago', activate: false},
    {nomeMes: 'Set', activate: false},
    {nomeMes: 'Out', activate: false},
    {nomeMes: 'Nov', activate: false},
    {nomeMes: 'Dez', activate: false}
  ];

  constructor(private utils: HomeUtils) { }

  ngOnInit() {
    console.log(this.fichas);
    this.somaFicha();
  }

  deactivate() {
    
    this.meses.forEach(c => {
      c.activate = false;
    });
    
  }

  somaFicha(){
    this.totalBruto = 0;
    this.totalLiquido = 0;
    this.totalDesconto = 0;
    this.fichas.forEach(f => {
      switch(this.mes) {
        case 'Jan' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.janeiro);   
          this.totalBruto += f.janeiro;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Fev' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.fevereiro);   
          this.totalBruto += f.fevereiro;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Mar' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.marco);   
          this.totalBruto += f.marco;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Abr' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.abril);   
          this.totalBruto += f.abril;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Mai' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.maio);   
          this.totalBruto += f.maio;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Jun' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.junho);   
          this.totalBruto += f.junho;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Jul' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.julho);   
          this.totalBruto += f.julho;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Ago' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.agosto);   
          this.totalBruto += f.agosto;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Set' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.setembro);   
          this.totalBruto += f.setembro;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Out' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.outubro);   
          this.totalBruto += f.outubro;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Nov' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.novembro);   
          this.totalBruto += f.novembro;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Dez' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.dezembro);   
          this.totalBruto += f.dezembro;
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        
      }

    });
  
  }

}
