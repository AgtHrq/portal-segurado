import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastrarService } from '../../services/cadastrar/cadastrar.service';
import { Pergunta } from '../../models/pergunta';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  meuForm: FormGroup;
  proximo: boolean = true;
  perguntas= [];

  constructor(formBuilder: FormBuilder, private cadastrarService: CadastrarService) { 

    this.meuForm = formBuilder.group({

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
  }

  ngOnInit() {
  }

  verifica(event, segurado){
    event.preventDefault();

    segurado.cpf = this.formatCpf(segurado.cpf);
    segurado.dataNascimento = this.formatData(segurado.dataNascimento);

    this.cadastrarService.verificarSegurado(segurado).subscribe(
      proximo => {
        this.proximo = false;

        this.perguntas = proximo.json();

        console.log("perguntas", this.perguntas);
      
      },
      error => {
        console.log("error");
        alert(error._body);
      }
    )
  }

  formatCpf(cpf: string): string {

    return cpf.replace(/\.|\-/gi, "");

  }

  formatData(date: string): string {

    return date.split('/').reverse().join('-');

  }

}
