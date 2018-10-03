import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ConsultaVinculoService } from '../../../services/consulta-vinculo/consulta-vinculo-service.service';
import { HomeUtils } from '../../../utils/home-utils';
import { VisualizarFichaFinanaceiraService } from '../../../services/visualizar-ficha-financeira/visualizar-ficha-finanaceira.service';

@Component({
  selector: 'app-visualiza-ficha',
  templateUrl: './vizualiza-ficha.component.html',
  styleUrls: ['./vizualiza-ficha.component.css'],
  animations:[
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ])
  ]
})
export class VizualizaFichaComponent implements OnInit {
  title = "Ficha Financeira";
  anos = [];
  meuForm: FormGroup;
  pageVisualizar: boolean = true;
  detail: boolean = false;
  @Output() pageFicha = new EventEmitter();
  vinculoFicha: any;
  vinculos = [
    // { orgao: "Vinculo 1", idVinculo: "1236811", activate: true, contracheques: 
    //   [
    //     { mes: "04", ano: "2018", activate: true }, 
    //     { mes: "05", ano: "2018", activate: false },
    //     { mes: "06", ano: "2018", activate: false },
    //     { mes: "07", ano: "2018", activate: false },
    //     { mes: "08", ano: "2018", activate: false },
    //     { mes: "09", ano: "2018", activate: false }
    //   ] }, 
    // { orgao: "Vinculo 2", idVinculo: "1236812", activate: false, contracheques:
    //   [
    //     { mes: "04", ano: "2018", activate: true }, 
    //     { mes: "05", ano: "2018", activate: false },
    //     { mes: "06", ano: "2018", activate: false },
    //     { mes: "07", ano: "2018", activate: false },
    //     { mes: "08", ano: "2018", activate: false },
    //     { mes: "09", ano: "2018", activate: false }
    //   ] }, 
    // { orgao: "Vinculo", idVinculo: "1236813", activate: false, contracheques: 
    //   [
    //     { mes: "04", ano: "2018", activate: true }, 
    //     { mes: "05", ano: "2018", activate: false },
    //     { mes: "06", ano: "2018", activate: false },
    //     { mes: "07", ano: "2018", activate: false },
    //     { mes: "08", ano: "2018", activate: false },
    //     { mes: "09", ano: "2018", activate: false }
    //   ] }
  ];
  constructor(private formBuilder: FormBuilder, private consultaVinculoService: ConsultaVinculoService,
     private utils: HomeUtils, private visualizarFichaService: VisualizarFichaFinanaceiraService) { }
  
  deactivate(vinculo) {
    
    this.vinculoFicha = vinculo;
    
    this.vinculos.forEach(v => {
      v.activate = false;
    });
  }
  
  ngOnInit() {
    this.utils.contracheque();
    
    this.vinculos.forEach(v => {
      if (v.activate === true) {
        this.vinculoFicha = v;
      }
    });
  
    for(let i = 1994; i <= new Date().getFullYear(); i++){
      this.anos.push(i);
    }

    this.meuForm = this.formBuilder.group({
      anoReferencia: ["", Validators.compose([Validators.required])],
      idVinculo: ["", Validators.compose([Validators.required])]
    });

    this.consultaVinculoService.getVinculos().subscribe(
      user => {
        this.vinculos = user.json();
        console.log(this.vinculos);
      }
    );

  }

  sendAno(event, ano){
    event.preventDefault();
    console.log("send!", ano);
    
    this.visualizarFichaService.getFichaFinanceira(ano).subscribe(
      element => {
        this.pageVisualizar = false;
        this.detail = true;
        console.log("estar aqui!" + element);
      },
      error => {
        alert(error._body);
        console.log(error._body);
      }
    );


  }

  voltar(){
    if(this.detail){
      this.pageVisualizar = true;
      this.detail = false;
    }else{
      this.pageFicha.emit(true);
      this.pageVisualizar = false;
      this.detail = false;
    }
  }

  setIdVinculo(evento){
    console.log(evento);
    this.meuForm.get('idVinculo').setValue(evento);
  }


}
