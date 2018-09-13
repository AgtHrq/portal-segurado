import { Component, OnInit, Input } from '@angular/core';

import { User } from './../../models/user';

@Component({
  selector: 'app-admin-submenu',
  templateUrl: './admin-submenu.component.html',
  styleUrls: ['./admin-submenu.component.css']
})
export class AdminSubmenuComponent implements OnInit {

  @Input() menus: string[];
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
