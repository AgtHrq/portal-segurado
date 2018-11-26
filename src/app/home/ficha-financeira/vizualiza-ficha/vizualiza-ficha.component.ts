import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ConsultaVinculoService } from '../../../services/consulta-vinculo/consulta-vinculo-service.service';
import { HomeUtils } from '../../../utils/home-utils';
import { VisualizarFichaFinanaceiraService } from '../../../services/visualizar-ficha-financeira/visualizar-ficha-finanaceira.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
  vinculos = [];
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';

  constructor(private formBuilder: FormBuilder, private consultaVinculoService: ConsultaVinculoService,
     private utils: HomeUtils, private visualizarFichaService: VisualizarFichaFinanaceiraService,
     private userService: UserService, private router: Router) { }
  
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
    console.log("send!", ano);
    
    this.visualizarFichaService.getFichaFinanceira(ano).subscribe(
      () => {
        this.pageVisualizar = false;
        this.detail = true;
      },
      error => {
        this.msgInfo = error._body;
        this.showConfirmModal = true;
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
    evento = evento.substr(10, 16);
    this.meuForm.get('idVinculo').setValue(evento);
  }


}
