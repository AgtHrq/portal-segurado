import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastrarService } from '../../services/cadastrar.service';
import { MaskUtils } from '../../utils/mask-utils';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  meuForm: FormGroup;
  cpfMask: MaskUtils;
  dataNascimentoMask: MaskUtils;
  proximo: boolean = true;

  constructor(formBuilder: FormBuilder, private cadastrarService: CadastrarService) { 
    this.cpfMask = new MaskUtils();
    this.dataNascimentoMask = new MaskUtils();

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
    this.cpfMask.cpfMask("cpf");
    this.dataNascimentoMask.dtMask("dataNascimento");
  }

  verifica(event, segurado){
    event.preventDefault();

    segurado.cpf = this.formatCpf(segurado.cpf);
    segurado.dataNascimento = this.formatData(segurado.dataNascimento);

    this.cadastrarService.verificarSegurado(segurado).subscribe(
      proximo => {
        this.proximo = false;

        console.log("json", proximo.json());
      
      },
      error => {
        console.log("error");
        alert(error._body);
      }
    )
  }

  formatCpf(cpf: String): String {

    return cpf.replace(/\.|\-/gi, "");

  }

  formatData(date: String): String {

    return date.split('/').reverse().join('-');

  }

}
