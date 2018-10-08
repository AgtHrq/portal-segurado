import { Component, OnInit, Input } from '@angular/core';
import { RespostaOuvidoria } from '../../../models/RespostaOuvidoria';

@Component({
  selector: 'app-detail-ouvidoria',
  templateUrl: './datail-ouvidoria.component.html',
  styleUrls: ['./datail-ouvidoria.component.css']
})
export class DatailOuvidoriaComponent implements OnInit {

  @Input() respostaOuvidoria: RespostaOuvidoria;
  resposta: boolean;

  constructor() { }

  ngOnInit() {

    this.respostaOuvidoria.resposta != null ? this.resposta = true : this.resposta = false;
  }

}
