import { Component, OnInit, Input } from '@angular/core';
import { SendIdNotificacaoService } from 'src/app/services/send-id-notificacao/send-id-notificacao.service';

@Component({
  selector: 'app-detail-excluir-notificacao',
  templateUrl: './detail-excluir-notificacao.component.html',
  styleUrls: ['./detail-excluir-notificacao.component.css']
})
export class DetailExcluirNotificacaoComponent implements OnInit {

  @Input() listNotificacoes;


  constructor(private sendIdNotificacaoService: SendIdNotificacaoService) { }

  ngOnInit() {
  }

  deleteNotificacao(event, idNotificacao){
    event.preventDefault();
    console.log(idNotificacao);
    this.sendIdNotificacaoService.sendIdNotificacao({id: idNotificacao}).subscribe(
      resp => {
        alert("Notificação excluída com sucesso!");
      },
      error =>{
        alert(error._body);
      }
    );

  }

}
