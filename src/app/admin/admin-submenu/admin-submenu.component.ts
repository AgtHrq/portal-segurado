import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-submenu',
  templateUrl: './admin-submenu.component.html',
  styleUrls: ['./admin-submenu.component.css']
})
export class AdminSubmenuComponent implements OnInit {

  menus: string[] = ["Alterar dados"];

  constructor() { }

  ngOnInit() {
  }

}
