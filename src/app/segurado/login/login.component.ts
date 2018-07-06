import { UserService } from './../../services/user.service';
import { Component, ViewChild, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

declare var $;

@Component({
    selector: 'login-segurado',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    ngOnInit(){

        this.fortmaterr();

    }

    constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService){

        if (userService.isLogged()) {
            this.route.navigate(["/logado"]);
        }

    }

    login(event, credentials){

        event.preventDefault();


        this.userService.authenticate(credentials).subscribe(
            data => {
                this.userService.updateLoggedUser(data);
                this.route.navigate(["/logado"]);
            },
            erro => alert(erro._body)
        );

    }

    fortmaterr(){

        $("#cpf").mask("000.000.000-00", {reverse: true});

    }

}