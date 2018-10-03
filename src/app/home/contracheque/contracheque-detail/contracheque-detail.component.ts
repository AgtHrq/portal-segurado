import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

import { HomeUtils } from '../../../utils/home-utils';

@Component({
  selector: 'app-contracheque-detail',
  templateUrl: './contracheque-detail.component.html',
  styleUrls: ['./contracheque-detail.component.css']
})
export class ContrachequeDetailComponent implements AfterViewInit {

  @Input() vinculo: any;

  constructor(private utils: HomeUtils) { }

  deactivate() {
    
    this.vinculo.contracheques.forEach( c => {
      c.activate = false;
    });
    
  }

  ngAfterViewInit() {

    this.utils.contracheque();

  }

}
