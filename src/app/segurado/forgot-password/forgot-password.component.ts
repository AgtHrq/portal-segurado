import { MaskUtils } from '../../utils/mask-utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../../services/forgot-password/forgot-password.service';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formSearch: FormGroup;
  showContent: boolean = false;
  showChangePassword: boolean = false;
  showQuestion: boolean = false;
  showEmail: boolean = false;
  errorMessage: string = "";
  showErrorMessage: boolean = false;
  showLoader: boolean = false;
  utils: MaskUtils = new MaskUtils();
  cpf: string = "";
  usuario: any;
  
  ngOnInit() { }

  constructor(private formBuilder: FormBuilder, private service: ForgotPasswordService) {

    this.formSearch = this.formBuilder.group({
      cpf: ["", Validators.compose([
        Validators.required, Validators.minLength(14)
            ])
      ]
    });

   }

  forgotPassword(event, cpf){

    event.preventDefault();
    this.showLoader = true;
    this.cpf = cpf.cpf;
    cpf.cpf = this.utils.removeMascara(cpf.cpf);

    this.service.verificaUsuario(cpf)
    .subscribe(
      user => {

        this.showLoader = false;
        if (user.json().usuario.email != null && user.json().usuario.email != "") {

          this.usuario = user.json();
          this.showEmail = true;
          this.showContent = true;
          
        } else {

          this.showContent = true;
          this.showQuestion = true;

        }
      },
      erro => {
        
        this.showLoader = false;
        this.errorMessage = erro._body;
        this.showErrorMessage = true;
        
      }
    );

    

  }

  hideError() {

    this.showErrorMessage = false;

  }

}
