import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recomendacoes',
  templateUrl: './recomendacoes.component.html',
  styleUrls: ['./recomendacoes.component.css']
})
export class RecomendacoesComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Output() okButton = new EventEmitter<boolean>();

  browsers = [
    { nome: 'Chrome', versao: 'Última' },
    { nome: 'Firefox', versao: 'Última' },
    { nome: 'Edge', versao: '2 últimas principais versões' },
    { nome: 'IE', versao: ['11', '10', '9'] },
    { nome: 'IE Mobile', versao: '11' },
    { nome: 'Safari', versao: '2 últimas principais versões' },
    { nome: 'IOS', versao: '2 últimas principais versões' },
    { nome: 'Android', versao: ['Nougat (7.0)', 'Marshmallow (6.0)', 'Lollipop (5.0, 5.1)', 'KitKat (4.4)'] }
  ]

  constructor() { }

  ngOnInit() {
  }

  confirmar(){

    this.okButton.emit(false);
  }

}
