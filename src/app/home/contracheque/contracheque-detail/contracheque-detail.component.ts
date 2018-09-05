import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { HomeUtils } from '../../../utils/home-utils';

@Component({
  selector: 'app-contracheque-detail',
  templateUrl: './contracheque-detail.component.html',
  styleUrls: ['./contracheque-detail.component.css']
})
export class ContrachequeDetailComponent implements OnInit, OnChanges {

  @Input() vinculo: any;

  constructor(private utils: HomeUtils) { }

  ngOnInit() {

    this.utils.contracheque();

  }

  deactivate() {

    this.vinculo.contracheques.forEach( c => {
      c.activate = false;
    });

  }

  ngOnChanges() { }

}
