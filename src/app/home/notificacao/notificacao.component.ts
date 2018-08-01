import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacoes = ["1", "2", "3"];
  numNotificacoes: number = 0;
  constructor() { }

  ngOnInit() {

    this.numNotificacoes = this.notificacoes.length

  }
  
}