import { MaskUtils } from './../../../utils/mask-utils';
import { Pergunta } from '../../../models/pergunta';
import { PerguntaService } from '../../../services/perguntas/pergunta.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder, private perguntaService: PerguntaService) {

    this.formChange = this.formBuilder.group({
      pergunta: "",
      resposta: ""
    });

    this.perguntaService.getPerguntas().subscribe(p => this.perguntas = p.json());
    

  }

    changePassword(event, questionAnswer){

    event.preventDefault();
    

    }

  ngOnInit() { }

}
