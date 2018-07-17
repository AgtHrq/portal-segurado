import { MaskUtils } from './../../../utils/mask-utils';
import { Pergunta } from '../../../models/pergunta';
import { PerguntaService } from '../../../services/perguntas/pergunta.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';

@Component({
  selector: 'app-first-verification',
  templateUrl: './first-verification.component.html',
  styleUrls: ['./first-verification.component.css']
})
export class FirstVerificationComponent implements OnInit {

  @Input() cpf: string = "";
  util: MaskUtils = new MaskUtils();
  formChange: FormGroup;
  perguntas: any;
  errrorMessage: string = "";
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, private perguntaService: PerguntaService, private forgotServive: ForgotPasswordService) {

    this.formChange = this.formBuilder.group({
      cpf: this.cpf,
      pergunta: ["", Validators.compose([Validators.required])],
      resposta: ["", Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.perguntaService.getPerguntas().subscribe(p => this.perguntas = p.json());
    

  }

    changePassword(event, questionAnswer){

    event.preventDefault();
    questionAnswer.cpf = this.util.removeMascara(this.cpf);
    
    this.forgotServive.verificaPergunta(questionAnswer)
      .subscribe(
        data => console.log(data),
        error => {
          this.errrorMessage = error._body;
          this.error = true;
        }
      );

    }

  ngOnInit() { }

}
