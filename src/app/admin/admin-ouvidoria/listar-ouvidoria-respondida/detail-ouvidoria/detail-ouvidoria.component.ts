import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-ouvidoria',
  templateUrl: './detail-ouvidoria.component.html',
  styleUrls: ['./detail-ouvidoria.component.css']
})
export class DetailOuvidoriaComponent implements OnInit {

  @Input() detailOuvidoria;

  constructor() { }

  ngOnInit() {



  }

}
