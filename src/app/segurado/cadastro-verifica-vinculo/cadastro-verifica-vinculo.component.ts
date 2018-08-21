import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrgaosService } from '../../services/orgaos/orgaos.service';
import { VerificaVinculosService } from '../../services/verifica-vinculos/verifica-vinculos.service';
import { Router } from '../../../../node_modules/@angular/router';
import { vinculo } from './vinculo';

@Component({
  selector: 'app-cadastro-verifica-vinculo',
  templateUrl: './cadastro-verifica-vinculo.component.html',
  styleUrls: ['./cadastro-verifica-vinculo.component.css']
})
export class CadastroVerificaVinculo implements OnInit, OnChanges {
  
  meuForm2: FormGroup;
  inputs = [];
  orgaos = [];
  nomeSegurado: string;
  @Input() numInputs: number;
  @Input() nomeSeguradoValidacao;
  @Input() cpfSeguradoValidacao;
  @Input() vinculosValidacao = [];
  @Output() respostaCadastro2 = new EventEmitter();
  @Output() respostaVerificaVinculos = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private orgaosService: OrgaosService,
    private verificaVinculosService: VerificaVinculosService, private router:Router) { }
    
    ngOnChanges() {

    }
    
    
    ngOnInit() {
      // console.log("numero de input: " + this.numInputs);
      // console.log("nome: " + this.nomeSeguradoValidacao);
      // console.log("cpf: " + this.cpfSeguradoValidacao);
      console.log('validacao', this.vinculosValidacao);
      
      this.meuForm2 = this.formBuilder.group({
        nomeSegurado: [this.nomeSeguradoValidacao],
        cpf: [this.cpfSeguradoValidacao]
      });
      
      for(let i = 0; i < this.numInputs; i++){
        this.meuForm2.addControl(`matricula${i}`, new FormControl('', [Validators.required, Validators.minLength(9)]));
        this.meuForm2.addControl(`idOrgao${i}`, new FormControl('', Validators.required));
      }
      
      this.inputs.length = this.numInputs;
      
      this.orgaosService.getOrgaos().subscribe(
        orgaos => {
          this.orgaos = orgaos.json();
          console.log("orgaos back", this.orgaos);

        },
      );

  }
  
  verifica(event, vinculos){
    event.preventDefault();
    vinculos.cpf = vinculos.cpf.replace(/\.|\-/gi, "");
    let vinculosList: vinculo[] = [];

    for(let i = 0; i < this.numInputs; i++){
      vinculos[`matricula${i}`] = vinculos[`matricula${i}`].replace(/\.|\-/gi, "");
      let pessoaVinculo = new vinculo(vinculos[`idOrgao${i}`], vinculos[`matricula${i}`], vinculos.cpf);
      vinculosList.push(pessoaVinculo);
    }

    console.log(vinculosList);

    this.verificaVinculosService.verificarVinculoSegurado(vinculosList).subscribe(
      proximo => {
        console.log(proximo);
        this.nomeSegurado = vinculos.nomeSegurado;
        console.log(this.nomeSegurado);
        this.respostaVerificaVinculos.emit(false);
        this.respostaCadastro2.emit(true);
      },
      error => {
        alert(error._body);
      }

    );
  }

}
