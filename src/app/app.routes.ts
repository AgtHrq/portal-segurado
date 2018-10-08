import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './services/guards/admin.guard';
import { InitialComponent } from './home/ouvidoria/initial/initial.component';
import { AddOuvidoriaComponent } from './home/ouvidoria/add-ouvidoria/add-ouvidoria.component';
import { SolicitacaoComponent } from './home/solicitacao/solicitacao.component';
import { ProcessoComponent } from './home/processo/processo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './segurado/login/login.component';
import { CadastroComponent } from './segurado/cadastro/cadastro.component';
import { ForgotPasswordComponent } from './segurado/forgot-password/forgot-password.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AuthGuard } from './services/guards/auth.guard';
import { OuvidoriaComponent } from './home/ouvidoria/ouvidoria.component';
import { FichaFinanceiraComponent } from './home/ficha-financeira/ficha-financeira.component';
import { VizualizaFichaComponent } from './home/ficha-financeira/vizualiza-ficha/vizualiza-ficha.component';
import { RespostaComponent } from './home/ouvidoria/resposta/resposta.component';
import { ContrachequeComponent } from './home/contracheque/contracheque.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CadastroUsuarioComponent } from './admin/admin-home/cadastro-usuario/cadastro-usuario.component';
import { SuperAdminGuard } from './services/guards/super-admin.guard';
import { AdminOuvidoriaComponent } from './admin/admin-ouvidoria/admin-ouvidoria.component';
import { ImprimirFichaComponent } from './home/ficha-financeira/imprimir-ficha/imprimir-ficha.component';
import { AdminSolicitacaoComponent } from './admin/admin-solicitacao/admin-solicitacao.component';

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
        path: "home/segurado", component: HomeComponent, canActivate: [AuthGuard], children: [
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
                    },
                    {
                        path: "imprimir/ficha", component: ImprimirFichaComponent
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
                        path: "respostas", component: RespostaComponent
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
                path: "contracheque", component: ContrachequeComponent
            },
            {
                path: "**", redirectTo: ""
            }
        ]
    },
    {
        path: "admin", component: AdminComponent, canActivate: [AdminGuard], 
        children: [
            { 
                path: "", component: AdminHomeComponent, children: 
                [
                    { 
                        path: "usuarios/cadastro", component: CadastroUsuarioComponent, canActivate: [SuperAdminGuard]
                    }
                ]
            },
            {
                path: "ouvidoria", component: AdminOuvidoriaComponent
            },
            {
                path: "solicitacao", component: AdminSolicitacaoComponent
            }
        ]
    },
    { 
        path: "**", redirectTo: "" 
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES);