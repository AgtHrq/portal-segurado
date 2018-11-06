import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SendIdNotificacaoService } from 'src/app/services/send-id-notificacao/send-id-notificacao.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ExcluirNotificacaoComponent } from '../excluir-notificacao.component';

@Component({
  selector: 'app-detail-excluir-notificacao',
  templateUrl: './detail-excluir-notificacao.component.html',
  styleUrls: ['./detail-excluir-notificacao.component.css']
})
export class DetailExcluirNotificacaoComponent implements OnInit {

  @Input() listNotificacoes;
  @Output() detail = new EventEmitter();
  @Output() listUpdate = new EventEmitter();
  showConfirmModal: boolean = false;
  showLoader:boolean = false;
  showMessage: boolean = false;
  messageInfo: string = '';
  infoSucess:boolean = false;
  showFeedBack:boolean = false;
  showConfirm:boolean = false;


  constructor(private sendIdNotificacaoService: SendIdNotificacaoService, private userService: UserService, 
    private router: Router, private listNotificacao: ExcluirNotificacaoComponent) { }

  ngOnInit() {
  }

  toggle(){
    this.detail.emit();
  }

  buttonModal(){
    this.showLoader = false;
    this.showConfirmModal = true;
    this.messageInfo = "Confima que desejas relamente excluir essa notificação?";
  }

  deleteNotificacao(idNotificacao){
    this.showLoader = true;
    console.log(idNotificacao);
    this.sendIdNotificacaoService.sendIdNotificacao({id: idNotificacao}).subscribe(
      () => {
        this.showLoader = false;
        this.showConfirmModal = false;
        this.listUpdate.emit();
      },
      error =>{
        this.showLoader = false;
        this.showConfirmModal = true;
        this.messageInfo = error.json().message;
      }
    );

  }

}
