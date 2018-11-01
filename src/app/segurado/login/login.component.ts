import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MaskUtils } from '../../utils/mask-utils';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserRole } from '../../models/user-role.enum';

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
    type: string = "password";
    icon: string = "eye link icon";

    ngOnInit(){ }

    constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService, formBuilder: FormBuilder){
        
        if (userService.isLogged()) {
            this.userService.getLoggedUser().subscribe(user => {
                user as User;
                if(user.user_role.trim() === UserRole.segurado){
                    this.route.navigate(["/home/segurado"]);
                } else if(user.user_role.trim() === UserRole.super_admin || user.user_role.trim() === UserRole.admin){
                    this.route.navigate(["/admin"]);
                }
            });
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

        event.preventDefault();
        delete credentials.cap;
        credentials.cpf = this.utils.removeMascara(credentials.cpf);
        this.showLoader = true;

        this.userService.authenticate(credentials).subscribe(
            data => {
                this.showLoader = false;
                this.userService.updateLoggedUser(data.text());
                this.userService.getLoggedUser().subscribe(user => {
                    user as User;
                    if (user.user_role.trim() === UserRole.super_admin || user.user_role.trim() === UserRole.admin){
                        this.route.navigate(["/admin"]);
                    } else {
                        this.route.navigate(["/home/segurado"]);
                    }
                })
            },
            erro => {
                this.showLoader = false;
                this.erroMessage = erro._body;
                this.showMessage = true;
            }
        );

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