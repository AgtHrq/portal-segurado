import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-alterar-dados',
  templateUrl: './alterar-dados.component.html',
  styleUrls: ['./alterar-dados.component.css'],
  animations:[
    trigger('flyInOut', [
      state('inactive', style({ display: 'none' })),
      state('active', style({ transform: 'translateX(0)' })),
      transition('inactive => active', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('active => inactive', [
        animate(100, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class AlterarDadosComponent implements OnInit, OnChanges {

  @Input() state: string = 'inactive';
  @Output() toggle = new EventEmitter<string>();

  constructor() { }

  toggleState(state: string){

    this.toggle.emit(state);
    this.state = state ;

  }

  ngOnInit() { }

  ngOnChanges() { }

}
