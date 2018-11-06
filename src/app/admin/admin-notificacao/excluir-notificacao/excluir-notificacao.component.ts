import { Component, OnInit } from '@angular/core';
import { GetNotificacoesService } from 'src/app/services/get-notificacoes/get-notificacoes.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Notificacao } from 'src/app/models/notificacao';

@Component({
  selector: 'app-excluir-notificacao',
  templateUrl: './excluir-notificacao.component.html',
  styleUrls: ['./excluir-notificacao.component.css']
})
export class ExcluirNotificacaoComponent implements OnInit {

  listNotificacoes: Notificacao[];
  messageInfo: string = '';
  infoSucess:boolean = false;
  showMessage: boolean = false;
  showConfirmModal: boolean = false;
  datail: any;

  constructor(private getNotificacoesService: GetNotificacoesService, 
    private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.listNotificacoes = [];
    this.getNotificacoesService.getNotificoes().subscribe(
      notificacoes => {
        this.listNotificacoes = notificacoes.json() as Notificacao[];
        console.log(this.listNotificacoes);
        this.listNotificacoes.forEach(
          s => {
            s.showTd = "show";
            s.showDetail = "hidden";
          }
        );
      },
      error => {
        this.showConfirmModal = true;
        this.messageInfo = error.json().message;
      }
      );
    }
    
    buttonModal(){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }

  toggleState(notificacao: Notificacao) {

    if (notificacao.showDetail === 'hidden'){
      notificacao.showDetail = 'show';
      notificacao.showTd = 'hidden';
    } else {
      notificacao.showDetail = 'hidden';
      notificacao.showTd = 'show';
    }

  }

}
