import { Component, OnInit } from '@angular/core';
import { GetNotificacoesService } from 'src/app/services/get-notificacoes/get-notificacoes.service';

@Component({
  selector: 'app-excluir-notificacao',
  templateUrl: './excluir-notificacao.component.html',
  styleUrls: ['./excluir-notificacao.component.css']
})
export class ExcluirNotificacaoComponent implements OnInit {

  listNotificacoes = [];

  constructor(private getNotificacoesService: GetNotificacoesService) { }

  ngOnInit() {

    this.getNotificacoesService.getNotificoes().subscribe(
      notificacoes => {
        this.listNotificacoes = notificacoes.json();
        console.log(this.listNotificacoes);
        this.listNotificacoes.forEach(
          s => {
            s.showTd = "show";
            s.showDetail = "hidden";
          }
        )
      }
    );
  }

  showDetail(event) {

    if (!(event.showDetail.trim() === "show")){
      this.listNotificacoes.forEach(notificacoes => {
        notificacoes.showDetail = "hidden";
        notificacoes.showTd = "show";
      });
    }

    if (event.showTd.trim() === "show"){
      event.showTd = "hidden";
      event.showDetail = "show";
    } else {
      event.showTd = "show";
      event.showDetail = "hidden";
    }

  }

}
