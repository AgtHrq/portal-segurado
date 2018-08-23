import { Component, OnInit} from '@angular/core';

import { HomeUtils } from './../../utils/home-utils';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacoes = ["1", "2", "3"];
  numNotificacoes: number = 0;
  
  constructor(private utils: HomeUtils) { }

  ngOnInit() {

    this.numNotificacoes = this.notificacoes.length;
    this.utils.notificacoes();


  }
  
}