import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HomeUtils } from '../../../utils/home-utils';

@Component({
  selector: 'app-ficha-financeira-detail',
  templateUrl: './ficha-financeira-detail.component.html',
  styleUrls: ['./ficha-financeira-detail.component.css']
})
export class FichaFinanceiraDetailComponent implements OnInit {

  @Input() ficha: any;

  constructor(private utils: HomeUtils) { }

  ngOnInit() {
  }

  deactivate(){
    this.ficha.contracheques.forEach(
      element => {
        element.activate = false;
      }
    );
  }

  // ngAfterViewInit() {

  //   this.utils.contracheque();

  // }

}
