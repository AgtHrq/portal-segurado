import { LogadoComponent } from './logado/logado.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./segurado/login/login.component";
import { CadastroComponent } from './segurado/cadastro/cadastro.component';
import { Cadastro2Component } from './segurado/cadastro2/cadastro2.component';

const APP_ROUTES: Routes = [

    { path: "", component: LoginComponent },
    { path: "cadastro", component: CadastroComponent},
    { path: "logado", component: LogadoComponent},
    { path: "cadastro2", component: Cadastro2Component },
    { path: "**", redirectTo: "" }

];

export const routing = RouterModule.forRoot(APP_ROUTES);