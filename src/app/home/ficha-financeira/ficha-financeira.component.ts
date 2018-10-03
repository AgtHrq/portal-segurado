import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ficha-financeira',
  templateUrl: './ficha-financeira.component.html',
  styleUrls: ['./ficha-financeira.component.css'],
  animations:[
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ])
  ]
})
export class FichaFinanceiraComponent implements OnInit {

  title: string = "ficha financeira";
  activeView: string = "";
  activeImprimir: string = "";
  visualizar: boolean = false;
  ficha: boolean = true;
  imprimir: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(menu: string){
    if(menu.trim() === "view"){
      this.activeView = "active ";
      this.activeImprimir= "";
      this.visualizar = true;
      this.ficha = false;
    }else {
      this.imprimir = true;
      this.ficha = false;
      this.activeView = "";
      this.activeImprimir= "active ";
    }
  }

  mudaFlagPageFicha(evento){
    this.ficha = evento;
    this.visualizar = false;
    this.imprimir = false;
  }
}
