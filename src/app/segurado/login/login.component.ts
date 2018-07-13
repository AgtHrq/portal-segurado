import { UserService } from '../../services/user.service';
import { Component, ViewChild, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
    selector: 'login-segurado',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    private erroTitle: string = "Erro ao realizar login";
    private erroMessage: string = "Erro ao realizar login";
    private showMessage: boolean = false;
    formGroup: FormGroup;

    ngOnInit(){

        //this.fortmaterr();

    }

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
            )]

        });

    }

    login(event, credentials){

        event.preventDefault();
        credentials.cpf = this.formatCpf(credentials.cpf);

        this.userService.authenticate(credentials).subscribe(
            data => {
                this.userService.updateLoggedUser(data);
                this.route.navigate(["/logado"]);
            },
            erro => {
                this.erroMessage = erro._body;
                this.showMessage = true;
            }
        );

    }

    hideError() {

        this.showMessage = false;

    }

    formatCpf(cpf: String): String {

        return cpf.replace(/\.|\-/gi, "");

    }

}