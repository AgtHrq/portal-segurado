import { UserService } from './../../services/user.service';
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'login-segurado',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

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
            erro => alert(erro)
        );

    }

}