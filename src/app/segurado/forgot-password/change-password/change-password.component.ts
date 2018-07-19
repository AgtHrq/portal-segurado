import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';
import { upperCase, lowerCase, containNumber, equal } from '../../../validators/password.validator';

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
      newPassword: ["", 
        [
          Validators.required, Validators.minLength(6), Validators.maxLength(14), upperCase, lowerCase, containNumber
        ]
      ],
      confirmPassword: ""
    });

    this.formNewPassword.setValidators([ equal ]);

   }

  ngOnInit() { }

}
