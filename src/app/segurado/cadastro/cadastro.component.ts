import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public dtNascimento: string;
  //public cpf: string;
  public nomeC: string;
  public nomeMae: String;
  public modelWithValue: string;
  public formControlInput: FormControl = new FormControl()
  public maskDtNascimento: Array<string | RegExp>
  public maskCpf: Array<string | RegExp>
  meuForm: FormGroup;
  

  constructor(formBuilder: FormBuilder) { 
    this.maskDtNascimento = [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    this.maskCpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.dtNascimento = '';
    // this.cpf = '';
    this.nomeC = '';
    this.nomeMae = '';

    this.meuForm = formBuilder.group({

      cpf: ["", Validators.compose(
          [Validators.minLength(16), Validators.required]
        )],
      dtNascimento: ["", Validators.compose(
        [Validators.required]
      )],

    });
  }

  ngOnInit() {
  }

}
