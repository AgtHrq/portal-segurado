import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add-ouvidoria',
  templateUrl: './add-ouvidoria.component.html',
  styleUrls: ['./add-ouvidoria.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-30%)' }),
        animate(300)
      ])
    ])
  ]
})
export class AddOuvidoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
