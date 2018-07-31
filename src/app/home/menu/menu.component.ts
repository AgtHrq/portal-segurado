import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() descricao: string = "";
  @Input() icon: string = "";

  constructor() { }

  ngOnInit() {
  }

}
