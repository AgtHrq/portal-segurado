import { UserService } from '../../services/user.service';
import { Component, ViewChild, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaskUtils } from '../../utils/mask-utils';

@Component({
    selector: 'login-segurado',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    erroTitle: string = "Erro ao realizar login";
    erroMessage: string = "Erro ao realizar login";
    showMessage: boolean = false;
    utils: MaskUtils = new MaskUtils();
    formGroup: FormGroup;
    showLoader: boolean = false;

    ngOnInit(){ }

    constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService, formBuilder: FormBuilder){
        
        if (userService.isLogged()) {
            this.route.navigate(["/logado"]);
        }

        this.formGroup = formBuilder.group({

            cpf: ["", Validators.compose(
                [Validators.required, Validators.minLength(14)]
            )],
            password: ["", Validators.compose(
                [Validators.required, Validators.minLength(6)]
            )],
            cap: ["", Validators.required]

        });
        
        this.formGroup.setErrors({ "cap": false });

    }

    login(event, credentials){

        // event.preventDefault();
        console.log(credentials);
        // credentials.cpf = this.utils.removeMascara(credentials.cpf);
        // this.showLoader = true;

        // this.userService.authenticate(credentials).subscribe(
        //     data => {
        //         this.showLoader = false;
        //         this.userService.updateLoggedUser(data);
        //         this.route.navigate(["/logado"]);
        //     },
        //     erro => {
        //         this.showLoader = false;
        //         this.erroMessage = erro._body;
        //         this.showMessage = true;
        //     }
        // );

    }

    hideError() {

        this.showMessage = false;

    }

    handleSuccess(event) {

        this.formGroup.get("cap").setValue(event);

    }

    handleExpire() {

        this.formGroup.get("cap").setValue(null);

    }

}