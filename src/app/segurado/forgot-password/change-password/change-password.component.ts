import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';
import { upperCase, lowerCase, containNumber, equal } from '../../../validators/password.validator';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnChanges {

  @Input() hash: string = "";
  formNewPassword: FormGroup;
  classMin: string = "error";
  classLetraMin: string = "error";
  classLetraMai: string = "error";
  showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private forgotService: ForgotPasswordService) {

    this.formNewPassword = formBuilder.group({
      hash: "",
      newPassword: ["", 
        [
          Validators.required, Validators.minLength(6), Validators.maxLength(14), upperCase, lowerCase, containNumber
        ]
      ],
      confirmPassword: ["", Validators.required]
    });

    this.formNewPassword.setValidators([ equal ]);

   }

   novaSenha(event, data){

    event.preventDefault();

    delete data.confirmPassword;

    console.log(data);

    this.forgotService.novaSenha(data).subscribe(
      data => {
        this.showSuccessMessage = true;
      }
    );

   }

  ngOnInit() { }

  ngOnChanges(){

    this.formNewPassword.get("hash").setValue(this.hash);

  }

}
