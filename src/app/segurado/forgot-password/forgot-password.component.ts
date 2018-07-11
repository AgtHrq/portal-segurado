import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CpfUtils } from '../../utils/cpf-utils';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private formSearch: FormGroup;
  private formChange: FormGroup;
  private showContent: boolean = false;
  private utils: CpfUtils;
  private cpf: string = "";

  constructor(private formBuilder: FormBuilder) {

    this.utils = new CpfUtils();
    this.utils.maskField("cpf");

    this.formSearch = this.formBuilder.group({
      cpf: ["", Validators.compose([
        Validators.required, Validators.minLength(14)
            ])
      ]
    });

    this.formChange = this.formBuilder.group({
      pergunta: "",
      resposta: ""
    });

   }

  forgotPassword(event, cpf){

    event.preventDefault();
    this.showContent = true;
    this.cpf = cpf.cpf;

  }

  ngOnInit() {

    this.utils.maskField("cpf");

  }

}
