import { Component, OnInit } from '@angular/core';

import { HomeUtils } from '../../../utils/home-utils';

@Component({
  selector: 'app-contracheque-detail',
  templateUrl: './contracheque-detail.component.html',
  styleUrls: ['./contracheque-detail.component.css']
})
export class ContrachequeDetailComponent implements OnInit {

  constructor(private utils: HomeUtils) { }

  ngOnInit() {

    this.utils.contracheque();

  }

}
