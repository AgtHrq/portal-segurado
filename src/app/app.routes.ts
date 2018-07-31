import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./segurado/login/login.component";
import { CadastroComponent } from './segurado/cadastro/cadastro.component';
import { ForgotPasswordComponent } from './segurado/forgot-password/forgot-password.component';
import { WelcomeComponent } from "./home/welcome/welcome.component";

const APP_ROUTES: Routes = [

    { 
        path: "", component: LoginComponent 
    },
    {
        path: "cadastro", component: CadastroComponent 
    },
    { 
        path: "esqueci/senha", component: ForgotPasswordComponent 
    },
    { 
        path: "home/segurado", component: HomeComponent, 
        children: [
            { 
                path: "", component: WelcomeComponent
            },
            {
                path: "**", redirectTo: ""
            }
        ]
    },
    { 
        path: "**", redirectTo: "" 
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES);