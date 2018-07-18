import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  @Input() hash: string = "";
  formNewPassword: FormGroup;
  classMin: string = "error";
  classLetraMin: string = "error";
  classLetraMai: string = "error";

  constructor(private formBuilder: FormBuilder, private forgotService: ForgotPasswordService) {

    this.formNewPassword = formBuilder.group({
      hash: "",
      newPassword: ["", Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(14), Validators.pattern("[a-zA-Z]*")
      ])],
      reNewPassword: ""
    });

   }

   verificaSenha(senha){

    if(senha.newPassword.includes("\d")){
      console.log("OK");
    }

   }

  ngOnInit() {

    console.log(this.hash);

  }

}
