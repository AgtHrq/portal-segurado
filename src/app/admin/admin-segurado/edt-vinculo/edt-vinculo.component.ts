import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { EdtVinculoService } from './edt-vinculo.service';

@Component({
  selector: 'app-edt-vinculo',
  templateUrl: './edt-vinculo.component.html',
  styleUrls: ['./edt-vinculo.component.css']
})
export class EdtVinculoComponent implements OnInit {

  segForm: FormGroup;
  items: FormArray;
  cpf: string;
  vinculos: any;
  selectedVinculo: any;

  constructor(private edtService: EdtVinculoService, private fb: FormBuilder) { }

  ngOnInit() {

    this.segForm = new FormGroup({
      'cpf': new FormControl('', [
        Validators.required,
        Validators.minLength(14)
      ])
    });
  }

  consultaVinculos(cpf: string){

    this.edtService.getVinculos(cpf.replace(/\.|\-/g, '')).subscribe(vinculos => {

      this.vinculos = vinculos.json() as any[];
      this.vinculos.forEach(vinculo => {
        
        vinculo.active = false;
        vinculo.cpf = this.maksCpf(vinculo.cpf);
        vinculo.matricula = this.maskMatricula(vinculo.matricula);
      });
      
      this.vinculos[0].active = true;
      this.selectedVinculo = this.vinculos[0];
    });
  }

  deactive() {
    
    this.vinculos.forEach(vinculo => {
      
      vinculo.active = false;
    });
  }

  maksCpf(cpf: string): string{

    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9)}`;
  }

  maskMatricula(matricula: string): string{

    return `${matricula.substr(0, 3)}.${matricula.substr(3, 3)}-${matricula.substr(6)}`;
  }
}
