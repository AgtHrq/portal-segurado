import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Menu } from 'src/app/models/menu';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-segurado',
  templateUrl: './admin-segurado.component.html',
  styleUrls: ['./admin-segurado.component.css']
})
export class AdminSeguradoComponent implements OnInit {

  menus: Menu[];
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.menus = [

      new Menu('Editar Vínculo', '', 'edt/vinculo')
    ];

    this.userService.getLoggedUser().subscribe(user => this.user = user);
  }

}
