import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';
import { upperCase, lowerCase, containNumber, equal } from '../../../validators/password.validator';
import { GetUserHashService } from 'src/app/services/get-user-hash/get-user-hash.service';
import { User } from 'src/app/models/user';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  @Input() hash: any = "";
  hashUrl;
  user: User;
  formNewPassword: FormGroup;
  classMin: string = "error";
  classLetraMin: string = "error";
  classLetraMai: string = "error";
  showSuccessMessage: boolean = false;
  showLoader: boolean = false;

  constructor(private formBuilder: FormBuilder, private forgotService: ForgotPasswordService, 
    private router: Router, private activatedRoute: ActivatedRoute, private userHash: GetUserHashService) {

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
    data.hash = this.hash;
    delete data.confirmPassword;


    this.forgotService.novaSenha(data).subscribe(
      data => {
        this.showLoader = false;
        this.showSuccessMessage = true;
      }, erro => this.showLoader = false
    );

   }

  ngOnInit() { 

    if (this.activatedRoute.snapshot.paramMap.get('hashBack')){
      this.hashUrl = this.activatedRoute.snapshot.paramMap.get('hashBack');
      this.hash = this.hashUrl;
      this.formNewPassword.get("hash").setValue(this.hash);
  
  
      this.userHash.getUserHash(this.hash).subscribe(
        h => {
          this.user = h.json() as User;
        },
        error => {
          this.router.navigate(['/']);
        }
      );
    }

  }

}
