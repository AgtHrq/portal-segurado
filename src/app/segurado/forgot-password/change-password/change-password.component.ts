import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';
import { upperCase, lowerCase, containNumber, equal } from '../../../validators/password.validator';

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
  showLoader: boolean = false;

  constructor(private formBuilder: FormBuilder, private forgotService: ForgotPasswordService, private router: Router, private activatedRoute: ActivatedRoute) {

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
    this.showLoader = true;

    delete data.confirmPassword;

    this.forgotService.novaSenha(data).subscribe(
      data => {
        this.showLoader = false;
        this.showSuccessMessage = true;
      }, erro => this.showLoader = false
    );

   }

  ngOnInit() { console.log(this.activatedRoute.outlet)}

  ngOnChanges(){

    this.formNewPassword.get("hash").setValue(this.hash);

  }

}
