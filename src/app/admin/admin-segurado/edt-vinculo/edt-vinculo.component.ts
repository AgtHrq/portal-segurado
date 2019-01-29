import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { EdtVinculoService } from './edt-vinculo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edt-vinculo',
  templateUrl: './edt-vinculo.component.html',
  styleUrls: ['./edt-vinculo.component.css']
})
export class EdtVinculoComponent implements OnInit, AfterViewInit {

  segForm: FormGroup;
  items: FormArray;
  cpf: string;
  vinculos: any;
  selectedVinculo: any;

  constructor(private edtService: EdtVinculoService, private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.segForm = new FormGroup({
      'cpf': new FormControl('', [
        Validators.required,
        Validators.minLength(14)
      ])
    });
  }
  
  ngAfterViewInit(){

    
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
    },
      error=> {
        console.log(error);
        if (error._body === "O cpf informado não possui processos abertos e/ou fechados!") {
          // this.showLoader = false;
        } else if (error.json().message.trim() === "Invalid Token") {
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      }
    );
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
