import { Component, OnInit } from '@angular/core';
import { GetAllOuvidoriaService } from 'src/app/services/get-all-ouvidoria/get-all-ouvidoria.service';
import { Ouvidoria } from 'src/app/models/ouvidoria';

@Component({
  selector: 'app-listar-ouvidoria',
  templateUrl: './listar-ouvidoria.component.html',
  styleUrls: ['./listar-ouvidoria.component.css']
})
export class ListarOuvidoriaComponent implements OnInit {

  listarOuvidoria: Ouvidoria[] = [];
  constructor(private getAllOuvidoria: GetAllOuvidoriaService) { }

  ngOnInit() {
    this.getAllOuvidoria.getOuvidoria().subscribe(
      ouvidorias => {
        this.listarOuvidoria = ouvidorias.json();
        console.log(this.listarOuvidoria);
        this.listarOuvidoria.forEach(
          ouvidoria =>{
            ouvidoria.showTd = "show";
            ouvidoria.showDetail = "hidden";
          }
        )
      }
    );
  }

  showDetail(event) {

    if (!(event.showDetail.trim() === "show")){
      this.listarOuvidoria.forEach(ouvidoria => {
        ouvidoria.showDetail = "hidden";
        ouvidoria.showTd = "show";
      });
    }

    if (event.showTd.trim() === "show"){
      event.showTd = "hidden";
      event.showDetail = "show";
    } else {
      event.showTd = "show";
      event.showDetail = "hidden";
    }

  }

}
