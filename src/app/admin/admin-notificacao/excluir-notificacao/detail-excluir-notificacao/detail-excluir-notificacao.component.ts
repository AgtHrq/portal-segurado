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
  showAviso:boolean = false;
  showFeedBack:boolean = false;
  showConfirm:boolean = false;


  constructor(private sendIdNotificacaoService: SendIdNotificacaoService, private userService: UserService, 
    private router: Router, private listNotificacao: ExcluirNotificacaoComponent) { }

  ngOnInit() {
  }

  toggle(){
    this.detail.emit();
  }

  buttonModal(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else {
      this.showConfirmModal = true;
      this.messageInfo = "Confima que desejas realmente excluir essa notificação?";
    }
  }

  buttonModalNot(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else {
      this.showAviso = false;
    }
  }

  deleteNotificacao(idNotificacao){
    
    this.showLoader = true;
    this.sendIdNotificacaoService.sendIdNotificacao({id: idNotificacao}).subscribe(
      () => {
        this.showLoader = false;
        this.showConfirmModal = false;
        this.listUpdate.emit();
      },
      error =>{

        if(error._body === 'A notificação só pode ser excluída por seu criador ou pelo Super Adm!'){

          this.messageInfo = error._body;

        } else if(error.json().message.trim() === 'Invalid Token'){

          this.messageInfo = 'Login expirado, efetue o login novamente!';

        }else {
          this.messageInfo = error.json().message;
        }
        this.showLoader = false;
        this.showConfirmModal = false;
        this.showAviso = true;
        
      }
    );

  }

}
