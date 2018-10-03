import { Component, OnInit, Input } from '@angular/core';

import { User } from './../../models/user';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-admin-submenu',
  templateUrl: './admin-submenu.component.html',
  styleUrls: ['./admin-submenu.component.css']
})
export class AdminSubmenuComponent implements OnInit {

  @Input() menus: Menu[];
  @Input() user: User;
  @Input() descricao: string;

  constructor() { }

  ngOnInit() {
  }

}
