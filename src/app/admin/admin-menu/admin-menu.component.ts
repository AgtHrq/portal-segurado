import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  menus: any[] = [{ descricao: "Home", icon: "home icon" }, { descricao: "Notificação", icon: "users icon" }, { descricao: "Solicitação", icon: "paper plane icon" }];

  constructor() { }

  ngOnInit() {
  }

}
