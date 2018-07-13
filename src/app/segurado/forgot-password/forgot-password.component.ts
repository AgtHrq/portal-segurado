import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../../services/forgot-password/forgot-password.service';

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
  // utils: CpfUtils = new CpfUtils();
  cpf: string = "";
  
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
    this.cpf = cpf.cpf;
    // cpf.cpf = this.utils.formtCpf(cpf.cpf);

    this.service.verificaUsuario(cpf)
    .subscribe(
      user => {
        if (user.json().email != null || user.json().email != "") {

          this.showContent = true;
          this.showQuestion = true;

        }
      },
      erro => console.log(erro._body)
    );

    

  }

}
