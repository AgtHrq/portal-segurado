import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

import { ConsultaVinculoService } from '../../../services/consulta-vinculo/consulta-vinculo-service.service';
import { ImprimirFichaPeriodoService } from '../../../services/imprimir-ficha-periodo/imprimir-ficha-periodo.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-imprimir-ficha',
  templateUrl: './imprimir-ficha.component.html',
  styleUrls: ['./imprimir-ficha.component.css']
})
export class ImprimirFichaComponent implements OnInit {

  meuForm: FormGroup;
  periodo: any;
  anosInicio = [];
  anosFim = [];
  vinculos = [];
  vinculoFicha: any;
  element:boolean = true;
  @Output() pageFicha = new EventEmitter();
  pageImprimir: boolean = true;
  detail: boolean = false;
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';
  fileUrl;
  showLoader: boolean = false;

  constructor(private formBuilder: FormBuilder, private consultaVinculoService: ConsultaVinculoService,
    private imprimirFichaService: ImprimirFichaPeriodoService, private userService: UserService,
    private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.meuForm = this.formBuilder.group({
      matricula: ["", Validators.compose([Validators.required])],
      anoInicial: ["", Validators.compose([Validators.required])],
      anoFinal: ["", Validators.compose([Validators.required])],
      idVinculo: ["", Validators.compose([Validators.required])],
      cargo: ["", Validators.compose([Validators.required])],
      orgao: ["", Validators.compose([Validators.required])],
      tipoVinculo: ["", Validators.compose([Validators.required])]
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
    )
  }

  buttonModal(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else{
      this.showConfirmModal = false;
    }
  }

  setIdVinculo(evento){

    this.showLoader = true;
    this.meuForm.get('matricula').setValue(evento.idVinculo.substr(11, 18));
    this.meuForm.get('idVinculo').setValue(evento.idVinculo);
    this.meuForm.get('cargo').setValue(evento.cargo);
    this.meuForm.get('orgao').setValue(evento.orgao);
    this.meuForm.get('tipoVinculo').setValue(evento.tipoVinculo);
    this.imprimirFichaService.getAnoFichaFinanceira(evento.idVinculo).pipe(
      finalize(() => this.showLoader = false)
    ).subscribe(p => {
      this.periodo = p.json();
      if (this.periodo.menorAno < this.periodo.maiorAno || this.periodo.menorAno == this.periodo.maiorAno){
        
        this.anosInicio = [];
        for(let i = this.periodo.menorAno; i <= this.periodo.maiorAno; i++){
          this.anosInicio.push(i);
        }
      } else {

        this.anosInicio = [];
        for(let i = this.periodo.maiorAno; i <= this.periodo.menorAno; i++){
          this.anosInicio.push(i);
        }
      }
    }, err => {
      this.msgInfo = err.json().message;
      this.showConfirmModal = true;
    });

  }

  setAnosFim(evento: number){
    this.element = false;
    if(this.anosFim.length != 0){
      this.anosFim = []
    }
    if (this.periodo.menorAno < this.periodo.maiorAno || this.periodo.menorAno == this.periodo.maiorAno){

      for(let i = evento; i <= this.periodo.maiorAno; i++){
        this.anosFim.push(i);
      }
    } else {

      for(let i = evento; i <= this.periodo.menorAno; i++){
        this.anosFim.push(i);
      }
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
    this.showLoader = true;
    this.imprimirFichaService.getPeriodoFichaFinanceira(periodo).subscribe(
      arquivo => {
        let pdf = new Blob( [arquivo.blob()], {type: 'application/pdf; ficha_financeira' });
        saveAs(pdf, "fichafinanceira.pdf");
        this.showLoader = false;
      },
      error => {
        this.msgInfo = error._body;
        this.showConfirmModal = true;
        this.showLoader = false;
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
