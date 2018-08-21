import { Routes, RouterModule } from "@angular/router";

import { AddOuvidoriaComponent } from './home/ouvidoria/add-ouvidoria/add-ouvidoria.component';
import { SolicitacaoComponent } from './home/solicitacao/solicitacao.component';
import { ProcessoComponent } from './home/processo/processo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './segurado/login/login.component';
import { CadastroComponent } from './segurado/cadastro/cadastro.component';
import { ForgotPasswordComponent } from './segurado/forgot-password/forgot-password.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AuthGuard } from "./services/guards/auth.guard";
import { OuvidoriaComponent } from './home/ouvidoria/ouvidoria.component';
import { RespotaComponent } from "./home/ouvidoria/respota/respota.component";

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
        path: "home/segurado", component: HomeComponent, canActivate: [AuthGuard], 
        children: [
            { 
                path: "", component: WelcomeComponent
            },
            {
                path: "processos", component: ProcessoComponent
            },
            {
                path: "solicitacoes", component: SolicitacaoComponent
            },
            {
                path: "ouvidoria", component: OuvidoriaComponent, children: [
                    {
                        path: "respostas", component: RespotaComponent
                    },
                    {
                        path:"add/ouvidoria", component: AddOuvidoriaComponent
                    }
                ]
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