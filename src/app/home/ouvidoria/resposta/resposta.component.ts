import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { RespostaOuvidoriaService } from '../../../services/resposta-ouvidoria/resposta-ouvidoria.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { RespostaOuvidoria } from '../../../models/RespostaOuvidoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-30%' }),
        animate(300)
      ])
    ])
  ]
})
export class RespostaComponent implements OnInit {

  user: User;
  respOuvidoria: RespostaOuvidoria[] = [];
  aux: any;
  msgInfo: string = '';
  showConfirmModal: boolean = false;
  showSucess: boolean = false;


  constructor(private respostaOuvidoriaService: RespostaOuvidoriaService, 
      private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUser().subscribe(
      user => {
        this.user = user;
      }
    );

    this.respostaOuvidoriaService.getRespostasOuvidoria().subscribe(
      respostas => {
        this.aux = respostas.json();
        this.respOuvidoria = this.aux as RespostaOuvidoria[];
        this.respOuvidoria.forEach(
          r => {
            r.showTd = "show";
            r.showDetail = "hidden";
          },
        );
      },
      error => {
        if(error.json().message.trim() === 'Invalid Token'){
          this.msgInfo = 'Login expirado, efetue o login novamente!'
        }else{
          this.msgInfo = error.json().message;
        }
        this.showConfirmModal = true;
      }
    );
  }

  buttonModal(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else{
      this.showConfirmModal = false;
    }
  }

  showDetail(event) {

    if (!(event.showDetail.trim() === "show")){
      this.respOuvidoria.forEach(ouvidoria => {
        ouvidoria.showDetail = "hidden";
        ouvidoria.showTd = "show";
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