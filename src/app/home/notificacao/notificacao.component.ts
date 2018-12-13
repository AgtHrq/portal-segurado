import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { HomeUtils } from './../../utils/home-utils';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacoes: any = [];
  numNotificacoes: number = 0;
  
  constructor(private utils: HomeUtils, private notificacaoService: NotificacaoService, 
    private userService: UserService, private router: Router) { }

  ngOnInit() {

    
    this.notificacaoService.getNotificacoesSegurado().subscribe(n => {
      this.notificacoes = n.json()
      this.numNotificacoes = this.notificacoes.length;
      this.utils.notificacoes();
    }, error => {
        if (error.json().message.trim() === "Invalid Token") {
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      });

  }
  
}