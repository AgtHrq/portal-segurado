import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-dirf',
  templateUrl: './admin-dirf.component.html',
  styleUrls: ['./admin-dirf.component.css']
})
export class AdminDirfComponent implements OnInit {

  menus: Menu[];
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.menus = [
      new Menu('Upload Dirf', '', 'upload')
    ];
    this.userService.getLoggedUser().subscribe(
      u => this.user = u as User
    );
  }

}
