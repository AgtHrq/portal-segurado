import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-ouvidoria',
  templateUrl: './detail-ouvidoria.component.html',
  styleUrls: ['./detail-ouvidoria.component.css']
})
export class DetailOuvidoriaComponent implements OnInit {

  @Input() listarOuvidoria;
  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  responderOuvidoria(event, id){
    this.state.trim() === "inactive" ? this.state = "active" : this.state = "inactive";
  }

}
