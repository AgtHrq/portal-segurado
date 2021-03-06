import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { HomeUtils } from '../../../../utils/home-utils';
import { FichaFinanceira } from 'src/app/models/FichaFinanceira';

@Component({
  selector: 'app-ficha-financeira-detail',
  templateUrl: './ficha-financeira-detail.component.html',
  styleUrls: ['./ficha-financeira-detail.component.css']
})
export class FichaFinanceiraDetailComponent implements OnInit, OnChanges {

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
    this.somaFicha();
  }

  ngOnChanges() {

    this.hidden('Jan');
  }

  hidden(mes) {
    this.allFalse();
    switch(mes){
      case 'Jan': {
        
        this.fichas.forEach(f => {
          !f.janeiro && (f.hidden = true);
        });
        break;
      }
      case 'Fev': {
        
        this.fichas.forEach(f => {
          !f.fevereiro && (f.hidden = true);
        });
        break;
      }
      case 'Mar': {

        this.fichas.forEach(f => {
          !f.marco && (f.hidden = true);
        });
        break;
      }
      case 'Abr': {

        this.fichas.forEach(f => {
          !f.abril && (f.hidden = true);
        });
        break;
      }
      case 'Mai': {

        this.fichas.forEach(f => {
          !f.maio && (f.hidden = true);
        });
        break;
      }
      case 'Jun': {

        this.fichas.forEach(f => {
          !f.junho && (f.hidden = true);
        });
        break;
      }
      case 'Jul': {

        this.fichas.forEach(f => {
          !f.julho && (f.hidden = true);
        });
        break;
      }
      case 'Ago': {

        this.fichas.forEach(f => {
          !f.agosto && (f.hidden = true);
        });
        break;
      }
      case 'Set': {

        this.fichas.forEach(f => {
          !f.setembro && (f.hidden = true);
        });
        break;
      }
      case 'Out': {

        this.fichas.forEach(f => {
          !f.outubro && (f.hidden = true);
        });
        break;
      }
      case 'Nov': {

        this.fichas.forEach(f => {
          !f.novembro && (f.hidden = true);
        });
        break;
      }
      case 'Dez': {

        this.fichas.forEach(f => {
          !f.dezembro && (f.hidden = true);
        });
        break;
      }
    }
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
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.janeiro);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Fev' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.fevereiro);
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.fevereiro);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Mar' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.marco);
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.marco);   
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Abr' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.abril); 
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.abril);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Mai' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.maio); 
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.maio);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Jun' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.junho);
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.junho);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Jul' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.julho); 
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.julho);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Ago' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.agosto); 
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.agosto);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Set' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.setembro);
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.setembro);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Out' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.outubro);
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.outubro);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Nov' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.novembro); 
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.novembro);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        case 'Dez' :{
          f.tipoEvento.toUpperCase() == 'DESCONTO' && (this.totalDesconto += f.dezembro);
          f.tipoEvento.toUpperCase() == 'VENCIMENTO' && (this.totalBruto += f.dezembro);
          this.totalLiquido = this.totalBruto - this.totalDesconto;
          break;
        }
        
      }

    });
  
  }

  allFalse() {

    this.fichas.forEach(f => f.hidden = false);
  }

}
