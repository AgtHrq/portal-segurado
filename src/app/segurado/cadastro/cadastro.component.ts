import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public dtNascimento: string;
  public cpf: string;
  public nomeC: string;
  public nomeMae: String;
  public modelWithValue: string;
  public formControlInput: FormControl = new FormControl()
  public maskDtNascimento: Array<string | RegExp>
  public maskCpf: Array<string | RegExp>
  

  constructor() { 
    this.maskDtNascimento = [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    this.maskCpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.dtNascimento = '';
    this.cpf = '';
    this.nomeC = '';
    this.nomeMae = '';
    this.modelWithValue = ''
    this.formControlInput.setValue('')
  }

  ngOnInit() {
  }

}
