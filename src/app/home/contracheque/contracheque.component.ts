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
    { orgao: "Vinculo 1", activate: true }, 
    { orgao: "Vinculo 2", activate: false }, 
    { orgao: "Vinculo 3", activate: false }
  ];

  constructor() { }

  deactivate(vinculo) {

    this.vinculo = vinculo;

    this.vinculos.forEach(v => {
      v.activate = false;
    });

  }

  ngOnInit() { 

    this.vinculos.forEach(v => {
      if (v.activate === true) {
        this.vinculo = v;
      }
    })

   }
  
  ngOnChanges() { }
}
