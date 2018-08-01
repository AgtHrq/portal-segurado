import { Component, OnInit } from '@angular/core';

import { HomeUtils } from '../../utils/home-utils';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  title: string = "processos"

  constructor(private utils: HomeUtils) { }

  ngOnInit() {

  this.utils.processos();

  }

}
