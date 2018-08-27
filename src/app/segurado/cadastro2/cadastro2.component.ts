import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerguntaService } from '../../services/perguntas/pergunta.service';
import { upperCase, lowerCase, containNumber } from '../../validators/password.validator';
import { Cadastrar2Service } from '../../services/cadastrar2/cadastrar2.service';
import { equal, checkContato } from '../../validators/createPassword.validator';
import { CadastroVerificaVinculo } from '../cadastro-verifica-vinculo/cadastro-verifica-vinculo.component';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {
  meuForm: FormGroup;
  perguntas = [];
  @Input() nomeSegurado;
  @Input() cpfSegurado;
  
  constructor(private formBuilder: FormBuilder, private service: PerguntaService,
       private cadastraService2: Cadastrar2Service) {  }

  ngOnInit() {

    this.meuForm = this.formBuilder.group({

      email: ["", Validators.compose(
        [Validators.email]
      )],

      ddd: ["", Validators.compose(
        [Validators.minLength(3)]
      )],

      telefone: ["", Validators.compose(
        [Validators.minLength(9)]
      )],
      
      pergunta: ["", Validators.compose(
        [Validators.required]
      )],

      resposta: ["", Validators.compose(
        [Validators.required, Validators.minLength(3)]
      )],

      password: ["", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(14),
        upperCase,
        lowerCase,
        containNumber
      ]
    ],

      confirmeSenha: [],

      idPergunta: [],

      name: [this.nomeSegurado],

      cpf: [this.cpfSegurado]
      
    });

    this.meuForm.setValidators([ equal, checkContato ]);


    this.service.getPerguntas().subscribe(
      perguntas => this.perguntas = perguntas.json()
    );
    console.log(this.perguntas);

  }

  cadastra(event, usuario){

    event.preventDefault();
    let perguntaInfo: string = usuario.pergunta.split("-");
    
    usuario.pergunta = perguntaInfo[0].trim();
    usuario.idPergunta = perguntaInfo[1];
    usuario.celular = usuario.celular.replace(/\-/, "");
    usuario.ddd = usuario.ddd.substr(1, 2);

    console.log(usuario);

    this.cadastraService2.cadastrarSegurado(usuario).subscribe(
      user => {
        console.log(user.json());
        
      },
      error => {
        console.log(error._body);
        alert(error._body);
      }
    
    );


  }

}
