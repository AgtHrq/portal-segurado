import { InitialComponent } from './home/ouvidoria/initial/initial.component';
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
import { FichaFinanceiraComponent } from './home/ficha-financeira/ficha-financeira.component';
import { VizualizaFichaComponent } from './home/ficha-financeira/vizualiza-ficha/vizualiza-ficha.component';

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
                path: "ficha-financeira", component: FichaFinanceiraComponent, children: [
                    {
                        path: "visualizar/ficha", component: VizualizaFichaComponent
                    }
                ]
            },
            {
                path: "solicitacoes", component: SolicitacaoComponent
            },
            {
                path: "ouvidoria", component: OuvidoriaComponent, children: [
                    {
                        path:"", component: InitialComponent
                    },
                    {
                        path: "respostas", component: RespotaComponent
                    },
                    {
                        path:"add/ouvidoria", component: AddOuvidoriaComponent
                    },
                    {
                        path:"**", redirectTo: ""
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