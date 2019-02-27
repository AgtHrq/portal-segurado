import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrgaosService } from '../../services/orgaos/orgaos.service';
import { VerificaVinculosService } from '../../services/verifica-vinculos/verifica-vinculos.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Vinculo } from '../../models/vinculo';

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
  //@Input() vinculosValidacao = [];
  @Output() respostaCadastro2 = new EventEmitter();
  @Output() respostaVerificaVinculos = new EventEmitter();
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';

  constructor(private formBuilder: FormBuilder, private orgaosService: OrgaosService,
    private verificaVinculosService: VerificaVinculosService, private router:Router) { }
    
    ngOnChanges() {

    }
    
    
    ngOnInit() {
      
      this.meuForm2 = this.formBuilder.group({
        nomeSegurado: [this.nomeSeguradoValidacao],
        cpf: [this.cpfSeguradoValidacao],
      });
      
      for(let i = 0; i < this.numInputs; i++){

        this.meuForm2.addControl(`matricula${i}`, new FormControl('', [Validators.required, Validators.minLength(9)]));
        this.meuForm2.addControl(`idOrgao${i}`, new FormGroup({
          idOrgao: new FormControl('', Validators.required),
          codigo: new FormControl('', Validators.required),
          descricao: new FormControl('', Validators.required)
        }));
        this.meuForm2.addControl(`salario${i}`, new FormControl('', Validators.required))
      }

      
      
      this.inputs.length = this.numInputs;
      
      this.orgaosService.getOrgaos().subscribe(
        orgaos => {
          this.orgaos = orgaos.json();
        }
      );

  }

  setOrgao(event, index){
    this.meuForm2.get(`idOrgao${index}`).get('codigo').setValue(this.orgaos[event].codigo);
    this.meuForm2.get(`idOrgao${index}`).get('descricao').setValue(this.orgaos[event].descricao);
    this.meuForm2.get(`idOrgao${index}`).get('idOrgao').setValue(this.orgaos[event].id);
  }
  
  verifica(event, vinculos){
    event.preventDefault();
  
    vinculos.cpf = vinculos.cpf.replace(/\.|\-/gi, "");
    let vinculosList: Vinculo[] = [];

    for(let i = 0; i < this.numInputs; i++){
      vinculos[`matricula${i}`] = vinculos[`matricula${i}`].replace(/\.|\-/gi, "");
      let salario = vinculos[`salario${i}`].replace(/\D/gi, "");
      salario = salario.replace(/(\d)(\d{2})$/, '$1,$2');
      let pessoaVinculo = new Vinculo(vinculos[`idOrgao${i}`], vinculos[`matricula${i}`], vinculos.cpf, salario);
      vinculosList.push(pessoaVinculo);
    }


    this.verificaVinculosService.verificarVinculoSegurado(vinculosList).subscribe(
      () => {
        this.respostaVerificaVinculos.emit(false);
        this.respostaCadastro2.emit(true);
      },
      error => {
        this.msgInfo = error._body;
        this.showConfirmModal = true;
      }

    );
  }

  buttonModal(){
    this.showConfirmModal = false;
  }
  

}
