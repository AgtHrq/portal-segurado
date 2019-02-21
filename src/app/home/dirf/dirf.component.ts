import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DirfService } from 'src/app/services/dirf/dirf.service';
import { finalize } from 'rxjs/operators'
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-dirf',
  templateUrl: './dirf.component.html',
  styleUrls: ['./dirf.component.css'],
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
export class DirfComponent implements OnInit {

  title: string = 'DIRF';
  years: number[];
  formDirf: FormGroup;
  showModal = false;
  showLoader: boolean = true;
  message: string = '';

  constructor(private dirfService: DirfService, private fb: FormBuilder) { }

  ngOnInit() {

    this.dirfService.getYears().pipe(
      finalize(() => this.showLoader = false)
    ).subscribe(years => {
      this.years = years.json();
    }, () => {
      this.message = 'Nenhum Dirf encontrado';
      this.showModal = true;
    });

    this.formDirf = this.fb.group({
      ano: ['', Validators.required]
    });
  }

  getDirf(event, ano){

    event.preventDefault();
    this.showLoader = true;
    this.dirfService.getDirfSegurado(ano).pipe(
      finalize(() => this.showLoader = false)
    ).subscribe(dirf => {
      console.log(dirf);
      let pdf = new Blob([dirf.blob()], { type: 'application/pdf; attachement=contracheque.pdf' });
      saveAs(pdf, 'dirf.pdf');
    }, ()=> {
      this.message = 'Ocorreu um erro ao gerar o documento, agurde um pouco e tente novamente, caso persista o erro abra uma solicitação para entrar em contato conosco.';
      this.showModal = true;
    });
  }

}
