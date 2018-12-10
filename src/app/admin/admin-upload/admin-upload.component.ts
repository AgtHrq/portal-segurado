import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user';
import { Menu } from 'src/app/models/menu';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-upload',
  templateUrl: './admin-upload.component.html',
  styleUrls: ['./admin-upload.component.css']
})
export class AdminUploadComponent implements OnInit {

  private menus: Menu[];
  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.menus = [
      new Menu('Upload Termo', '', 'upload'),
      new Menu('Lista de Documentos', '', 'lista/documentos')
    ];

    this.userService.getLoggedUser().subscribe(
      u => this.user = u as User
    );
  }

}
