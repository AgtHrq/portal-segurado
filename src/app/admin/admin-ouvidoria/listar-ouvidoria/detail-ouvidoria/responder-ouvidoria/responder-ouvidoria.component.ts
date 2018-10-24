import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-responder-ouvidoria',
  templateUrl: './responder-ouvidoria.component.html',
  styleUrls: ['./responder-ouvidoria.component.css'],
  animations:[
    trigger('flyInOut', [
      state('inactive', style({ display: 'none' })),
      state('active', style({ transform: 'scale(1, 1)' })),
      transition('inactive => active', [
        style({ transform: 'scale(0, 0)' }),
        animate(300)
      ]),
      transition('active => inactive', [
        animate(300, style({ transform: 'scale(0, 0)' }))
      ])
    ])
  ]
})
export class ResponderOuvidoriaComponent implements OnInit {

  @Input() state: string = 'inactive';
  @Output() toggle = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  toggleState(state: string){
    this.toggle.emit(state);
  }

}
