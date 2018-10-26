import { Component, OnInit} from '@angular/core';

import { HomeUtils } from './../../utils/home-utils';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacoes: any = [];
  numNotificacoes: number = 0;
  
  constructor(private utils: HomeUtils, private notificacaoService: NotificacaoService) { }

  ngOnInit() {

    
    this.notificacaoService.getNotificacoesSegurado().subscribe(n => {
      this.notificacoes = n.json()
      this.numNotificacoes = this.notificacoes.length;
      this.utils.notificacoes();
    }
      );

  }
  
}