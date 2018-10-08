import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaVinculoService } from '../../../services/consulta-vinculo/consulta-vinculo-service.service';
import { ImprimirFichaPeriodoService } from '../../../services/imprimir-ficha-periodo/imprimir-ficha-periodo.service';

@Component({
  selector: 'app-imprimir-ficha',
  templateUrl: './imprimir-ficha.component.html',
  styleUrls: ['./imprimir-ficha.component.css']
})
export class ImprimirFichaComponent implements OnInit {

  meuForm: FormGroup;
  anosInicio = [];
  anosFim = [];
  vinculos = [];
  vinculoFicha: any;
  element:boolean = true;
  @Output() pageFicha = new EventEmitter();
  pageImprimir: boolean = true;
  detail: boolean = false;

  constructor(private formBuilder: FormBuilder, private consultaVinculoService: ConsultaVinculoService,
    private imprimirFichaService: ImprimirFichaPeriodoService) { }

  ngOnInit() {

    this.meuForm = this.formBuilder.group({
      anoReferencia: ["", Validators.compose([Validators.required])],
      anoReferenciaFim: ["", Validators.compose([Validators.required])],
      idVinculo: ["", Validators.compose([Validators.required])]
    });

    for(let i = 1994; i <= new Date().getFullYear(); i++){
      this.anosInicio.push(i);
    }

    this.consultaVinculoService.getVinculos().subscribe(
      user => {
        this.vinculos = user.json();
      }
    )
  }

  setIdVinculo(evento){
    evento = evento.substr(10, 16);
    this.meuForm.get('idVinculo').setValue(evento);
  }

  setAnosFim(evento: number){
    this.element = false;
    if(this.anosFim.length != 0){
      this.anosFim = []
    }
    for(let i = evento; i <= new Date().getFullYear(); i++){
      this.anosFim.push(i);
    }
    
  }

  voltar(){
    if(this.detail){
      this.pageImprimir = true;
      this.detail = false;
    }else{
      this.pageFicha.emit(true);
      this.pageImprimir = false;
      this.detail = false;
    }
  }

  sendPeriodo(event, periodo){
    event.preventDefault();
    console.log(periodo);

    this.imprimirFichaService.getPeriodoFichaFinanceira(periodo).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        alert(error._body);
        console.log(error._body);
      }
    )
  }

  deactivate(vinculo) {
    
    this.vinculoFicha = vinculo;
    
    this.vinculos.forEach(v => {
      v.activate = false;
    });
  }


}
