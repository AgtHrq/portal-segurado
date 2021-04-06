import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-admin-carregar-dados',
  templateUrl: './admin-carregar-dados.component.html',
  styleUrls: ['./admin-carregar-dados.component.css']
})
export class AdminCarregarDadosComponent implements OnInit {

  menus: Menu[];
  user: User;

  constructor(private userService: UserService) { }
  
  ngOnInit() {

    this.menus = [
      new Menu('Carregar Cad e VDs', '', 'uploadDados'),
      new Menu('Carregar Demais Arquivos', '', 'uploadDados2')
    ];
    this.userService.getLoggedUser().subscribe(
      u => this.user = u as User
    );

  }

}
