import { Component, OnInit, Input } from '@angular/core';
import { Ouvidoria } from 'src/app/models/ouvidoria';

@Component({
  selector: 'app-detail-ouvidoria',
  templateUrl: './detail-ouvidoria.component.html',
  styleUrls: ['./detail-ouvidoria.component.css']
})
export class DetailOuvidoriaComponent implements OnInit {

  @Input() listarOuvidoria;
  showModal:boolean = false;
  ouvidoria:Ouvidoria = null;

  constructor() { }

  ngOnInit() {
  }

  responderOuvidoria(ouvidoria: Ouvidoria){
    this.showModal = true;
    this.ouvidoria = ouvidoria;
    console.log(ouvidoria);
  }

}
