import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HomeUtils } from '../../utils/home-utils';

@Component({
  selector: 'app-contracheque',
  templateUrl: './contracheque.component.html',
  styleUrls: ['./contracheque.component.css'],
  animations:[
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ])
  ]
})
export class ContrachequeComponent implements OnInit, OnChanges {

  title: string = "contracheque";
  vinculo: any;
  vinculos = [
    { orgao: "Vinculo 1", matricula: "1236812", activate: true, contracheques: 
      [
        { mes: "04", ano: "2018", activate: true }, 
        { mes: "05", ano: "2018", activate: false },
        { mes: "06", ano: "2018", activate: false },
        { mes: "07", ano: "2018", activate: false },
        { mes: "08", ano: "2018", activate: false },
        { mes: "09", ano: "2018", activate: false }
      ] }, 
    { orgao: "Vinculo 2", matricula: "1236812", activate: false, contracheques:
      [
        { mes: "04", ano: "2018", activate: true }, 
        { mes: "05", ano: "2018", activate: false },
        { mes: "06", ano: "2018", activate: false },
        { mes: "07", ano: "2018", activate: false },
        { mes: "08", ano: "2018", activate: false },
        { mes: "09", ano: "2018", activate: false }
      ] }, 
    { orgao: "Vinculo", matricula: "1236812", activate: false, contracheques: 
      [
        { mes: "04", ano: "2018", activate: true }, 
        { mes: "05", ano: "2018", activate: false },
        { mes: "06", ano: "2018", activate: false },
        { mes: "07", ano: "2018", activate: false },
        { mes: "08", ano: "2018", activate: false },
        { mes: "09", ano: "2018", activate: false }
      ] }
  ];

  constructor(private utils: HomeUtils) { }

  deactivate(vinculo) {

    this.vinculo = vinculo;

    this.vinculos.forEach(v => {
      v.activate = false;
    });

  }

  ngOnInit() { 

    this.utils.contracheque();

    this.vinculos.forEach(v => {
      if (v.activate === true) {
        this.vinculo = v;
      }
    })

   }
  
  ngOnChanges() { }
}
