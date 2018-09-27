import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Contracheque } from '../../../../models/contracheque';

@Component({
  selector: 'app-contracheque-periodo-detail',
  templateUrl: './contracheque-periodo-detail.component.html',
  styleUrls: ['./contracheque-periodo-detail.component.css']
})
export class ContrachequePeriodoDetailComponent implements OnInit, OnChanges {

  @Input() contracheques: Contracheque[] = [];
  page: number = 1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

}
