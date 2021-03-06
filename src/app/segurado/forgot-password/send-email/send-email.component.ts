import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MaskUtils } from '../../../utils/mask-utils';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  @Input() cpf: string = "";
  email: string;
  showContent: boolean = false;
  utils: MaskUtils = new MaskUtils();
  errorMessage: boolean = false;
  showLoader: boolean = false;
  showFirstVerification: boolean = false;
  outraOpcao: boolean = false;

  constructor(private service: ForgotPasswordService) {  }

  ngOnInit() {

    this.service.verificaUsuario({ cpf: this.cpf })
      .subscribe(
        user => {
          this.email = user.json().usuario.email;
        }
      )
    
  }

  sendEmail(){
    
    this.showLoader = true;
    this.errorMessage = false;
    this.service.enviaEmail({ email: this.email })
      .subscribe(data => {
        console.log(data);
        this.showLoader = false;
        this.showContent = true;
      },
      erro => {
        this.showLoader = false;
        this.errorMessage = true;
      }
    );

  }

  showQuestion(){

    this.outraOpcao = true;
    this.showFirstVerification = true;
    this.cpf = this.utils.addMascara(this.cpf);

  }

}