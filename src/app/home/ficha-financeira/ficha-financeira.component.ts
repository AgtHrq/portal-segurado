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

  constructor() { }

  ngOnInit() {
  }

}
