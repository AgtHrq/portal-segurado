import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./segurado/login/login.component";
import { CadastroComponent } from './segurado/cadastro/cadastro.component';

const APP_ROUTES: Routes = [

    { path: "", component: LoginComponent },
    { path: "cadastro", component: CadastroComponent},
    { path: "**", redirectTo: "" }

];

export const routing = RouterModule.forRoot(APP_ROUTES);