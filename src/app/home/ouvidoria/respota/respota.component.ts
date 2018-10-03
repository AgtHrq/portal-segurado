import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { RespostaOuvidoriaService } from '../../../services/resposta-ouvidoria/resposta-ouvidoria.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-respota',
  templateUrl: './respota.component.html',
  styleUrls: ['./respota.component.css'],
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
export class RespotaComponent implements OnInit {

  user: User;

  constructor(private respostaOuvidoriaService: RespostaOuvidoriaService, 
      private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedUser().subscribe(
      user => {
        this.user = user;
      }
    );

    this.respostaOuvidoriaService.getRespostasOuvidoria().subscribe(
      respostas => {
        console.log("respostas", respostas);
      }
    )
  }

}