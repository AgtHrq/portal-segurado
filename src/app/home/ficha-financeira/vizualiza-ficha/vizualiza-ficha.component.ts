import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ConsultaVinculoService } from '../../../services/consulta-vinculo/consulta-vinculo-service.service';
import { HomeUtils } from '../../../utils/home-utils';
import { VisualizarFichaFinanaceiraService } from '../../../services/visualizar-ficha-financeira/visualizar-ficha-finanaceira.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FichaFinanceira } from 'src/app/models/FichaFinanceira';
import { ImprimirFichaPeriodoService } from 'src/app/services/imprimir-ficha-periodo/imprimir-ficha-periodo.service';
import { finalize } from 'rxjs/operators';

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
  vinculoFicha: FichaFinanceira[];
  vinculos = [];
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';
  showLoader: boolean = false;
  periodo: any;

  constructor(private formBuilder: FormBuilder, private consultaVinculoService: ConsultaVinculoService,
     private utils: HomeUtils, private visualizarFichaService: VisualizarFichaFinanaceiraService,
     private userService: UserService, private router: Router, private imprimirFicharService: ImprimirFichaPeriodoService) { }
  
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

    this.meuForm = this.formBuilder.group({
      anoReferencia: ["", Validators.compose([Validators.required])],
      idVinculo: ["", Validators.compose([Validators.required])]
    });

    this.consultaVinculoService.getVinculos().subscribe(
      user => {
        this.vinculos = user.json();
      },
      error => {
        if(error.json().message === 'Invalid Token'){
          this.msgInfo = 'Login expirado, efetue o login novamente!';
        }else{
          this.msgInfo = error.json().message;
        }

        this.showConfirmModal = true;
      }
    );

  }

  sendAno(event, ano){
    event.preventDefault();
    this.showLoader = true;
    
    this.visualizarFichaService.getFichaFinanceira(ano).subscribe(
      dadosFicha => {
        this.vinculoFicha = dadosFicha.json() as FichaFinanceira[];
        this.showLoader = false;
        this.pageVisualizar = false;
        this.detail = true;
      },
      error => {
        this.msgInfo = error._body;
        this.showConfirmModal = true;
        this.showLoader = true;
      }
    );


  }

  buttonModal(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else{
      this.showConfirmModal = false;
    }
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
    this.showLoader = true;
    this.meuForm.get('idVinculo').setValue(evento);
    this.imprimirFicharService.getAnoFichaFinanceira(evento).pipe(
      finalize(() => this.showLoader = false)
    ).subscribe(p => {
      this.periodo = p.json();
      if (this.periodo.menorAno < this.periodo.maiorAno || this.periodo.menorAno == this.periodo.maiorAno){
        
        for(let i = this.periodo.menorAno; i <= this.periodo.maiorAno; i++){
          this.anos.push(i);
        }
      } else {

        for(let i = this.periodo.maiorAno; i <= this.periodo.menorAno; i++){
          this.anos.push(i);
        }
      }
    });
  }


}
