import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menus: Menu[];

  constructor() { }

  ngOnInit() {
  }

}