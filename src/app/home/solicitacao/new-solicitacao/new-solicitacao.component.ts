import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-new-solicitacao',
  templateUrl: './new-solicitacao.component.html',
  styleUrls: ['./new-solicitacao.component.css'],
  animations: [
    trigger('flyInOut', [
      state('active', style({ transform: 'scale(1, 1)' })),
      transition('inactive => active', [
        style({ transform: 'scale(0, 0)' }),
        animate(300)
      ])
    ])
  ]
})
export class NewSolicitacaoComponent implements OnInit {

  user: User;
  @Input() state: string = "inactive";
  @Output() classEmitter = new EventEmitter<string>();
  @Output() stateEmitter = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoggedUser()
      .subscribe(user => this.user = user);

  }

  emitter(classCss: string, state: string) {

    this.classEmitter.emit(classCss);
    this.stateEmitter.emit(state);

  }

}
