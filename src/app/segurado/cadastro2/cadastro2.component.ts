import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerguntaService } from '../../services/perguntas/pergunta.service';
import { upperCase, lowerCase, containNumber } from '../../validators/password.validator';
import { Cadastrar2Service } from '../../services/cadastrar2/cadastrar2.service';
import { equal, checkContato } from '../../validators/createPassword.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {
  meuForm: FormGroup;
  perguntas = [];
  type = "password";
  @Input() nomeSegurado;
  @Input() cpfSegurado;
  
  constructor(private formBuilder: FormBuilder, private service: PerguntaService,
       private cadastraService2: Cadastrar2Service, private router: Router) {  }

  ngOnInit() {
    
    this.meuForm = this.formBuilder.group({
      cpf: [this.cpfSegurado], 
      
      name: [this.nomeSegurado],
      
      email: ["", Validators.compose(
        [Validators.email]
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
    
    ddd: ["", Validators.compose(
      [Validators.minLength(3)]
    )],
    
    telefone: ["", Validators.compose(
      [Validators.minLength(9)]
      )],
      
      idPergunta: ["", Validators.compose(
        [Validators.required]
      )],
      
      resposta: ["", Validators.compose(
        [Validators.required, Validators.minLength(3)]
        )],
        
        
        confirmeSenha: [],
        
      });
      
      this.meuForm.setValidators([ equal, checkContato ]);


  this.service.getPerguntas().subscribe(
    perguntas => {
      this.perguntas = perguntas.json();
      console.log(perguntas.json());
    }
  );

}

// setDescricao(event){
//   this.perguntas.forEach(
//     element => {
//       if(element.id == event.target.value){
//         this.meuForm.get('idPergunta').get('descricao').setValue(element.descricao);
//       }
//     }
//   )
// }

  cadastra(event, usuario){

    event.preventDefault();
    
    // usuario.cpf = usuario.cpf.replace(/\.|\-/gi, "");
    // usuario.ddd = usuario.ddd.substr(1, 2);
    // usuario.telefone = usuario.telefone.replace(/\-/, "");
    // delete(usuario.confirmeSenha);

    usuario.name = 'ABDIAS FREIRE BARRETO';
    usuario.cpf = '02343541434';
    usuario.Pergunta = 'Qual seu primeiro time?';
    usuario.idPergunta = '2';
    usuario.resposta = 'qualquer coisa';
    usuario.password = 'Aa123123'



    this.cadastraService2.cadastrarSegurado(usuario).subscribe(
      user => {
        this.router.navigate([""]);
        console.log(user.json());
        alert("Cadastro Realizado com sucesso!");
        
      },
      error => {
        console.log(error._body);
        alert(error._body);
      }
    
    );


  }

}
