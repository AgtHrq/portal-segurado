import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CadastrarService } from '../../services/cadastrar/cadastrar.service';
import { validatorsCPF } from '../../validators/validators-cpf.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  meuForm: FormGroup;
  cadastro: boolean = true;
  verificaVinculos: boolean = false;
  cadastro2: boolean = false;
  numVinculos:number;
  nomeSegurado: string;
  cpfSegurado: string;
  vinculos = [];
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';

  constructor(private formBuilder: FormBuilder, private cadastrarService: CadastrarService) { 


    this.meuForm = this.formBuilder.group({

      cpf: ["", Validators.compose(
          [Validators.minLength(14), Validators.required]
        )],
      dataNascimento: ["", Validators.compose(
        [Validators.required, Validators.minLength(10)]
      )],

      nome:["", Validators.compose(
        [Validators.required]
      )],

      nomeMae:["", Validators.compose(
        [Validators.required]
      )],

    });

    // this.meuForm.setValidators([ validatorsCPF ]);
  }

  ngOnInit() {
  }

  verifica(event, segurado){
    event.preventDefault();
    this.nomeSegurado = segurado.nome.toUpperCase();
    this.cpfSegurado = segurado.cpf;
    segurado.cpf = this.formatCpf(segurado.cpf);
    segurado.dataNascimento = this.formatData(segurado.dataNascimento);

    this.cadastrarService.verificarSegurado(segurado).subscribe(
      proximo => {
        this.numVinculos = proximo.json();
        this.cadastro = false;
        this.verificaVinculos = true;
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

  formatCpf(cpf: string): string {

    return cpf.replace(/\.|\-/gi, "");

  }

  formatData(date: string): string {

    return date.split('/').reverse().join('-');

  }

  mudaFlagCadastro2(evento){
    this.cadastro2 = evento;
  }

  mudaFlagVerificaVinculos(evento){
    this.verificaVinculos = evento;
  }
}
