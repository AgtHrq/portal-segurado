import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerguntaService } from '../../services/perguntas/pergunta.service';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {
  meuForm: FormGroup;
  perguntas = []; 
  constructor(formBuilder: FormBuilder, private service: PerguntaService) {
    



    this.meuForm = formBuilder.group({

      email: ["", Validators.compose(
        [Validators.email]
      )],

      ddd: ["", Validators.compose(
        [Validators.minLength(3)]
      )],

      celular: ["", Validators.compose(
        [Validators.minLength(9)]
      )],
      
      pergunta: ["", Validators.compose(
        [Validators.required]
      )],

      resposta: ["", Validators.compose(
        [Validators.required, Validators.minLength(3)]
      )],

      senha: ["", Validators.compose(
        [Validators.required, Validators.minLength(8)]
      )],

      confirmeSenha: ["", Validators.compose(
        [Validators.required, Validators.minLength(8)]
      )],

      idPergunta: [""]
      
    })
  }

  ngOnInit() {

    this.service.getPerguntas().subscribe(
      perguntas => this.perguntas = perguntas.json()
    );
    console.log(this.perguntas);

  }

  cadastra(event, usuario){

    event.preventDefault();
    usuario.ddd = this.formatDDD(usuario.ddd);
    usuario.celular = this.formatCelular(usuario.celular);
    if(usuario.senha != usuario.confirmeSenha){
      alert("Senhas divergentes");
      return;
    }

    console.log(usuario);



  }

  formatDDD(ddd: string): string{
    return ddd.replace(/\(|/gi, "");
  }

  formatCelular(numero: string): string{
      return numero.replace(/\-/, "");
  }

}
