import { Component, OnInit } from '@angular/core';

import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-new-solicitacao',
  templateUrl: './new-solicitacao.component.html',
  styleUrls: ['./new-solicitacao.component.css']
})
export class NewSolicitacaoComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoggedUser()
      .subscribe(user => this.user = user);

  }

}
