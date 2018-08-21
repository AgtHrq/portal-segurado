import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-respota',
  templateUrl: './respota.component.html',
  styleUrls: ['./respota.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-30%' }),
        animate(300)
      ])
    ])
  ]
})
export class RespotaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}