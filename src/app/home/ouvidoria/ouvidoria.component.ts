import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ouvidoria',
  templateUrl: './ouvidoria.component.html',
  styleUrls: ['./ouvidoria.component.css'],
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
export class OuvidoriaComponent implements OnInit {

  title: string = "ouvidoria";
  activeAdd: string = "";
  activeRep: string = "";

  constructor() { }

  ngOnInit() {
  }

  toggle(menu: string) {

    if(menu.trim() === "add"){
      this.activeAdd = "active ";
      this.activeRep = "";
    } else {
      this.activeAdd = "";
      this.activeRep = "active ";
    }

  }

}
