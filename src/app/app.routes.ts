import { LogadoComponent } from './logado/logado.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./segurado/login/login.component";

const APP_ROUTES: Routes = [

    { path: "", component: LoginComponent },
    { path: "logado", component: LogadoComponent},
    { path: "**", redirectTo: "" }

];

export const routing = RouterModule.forRoot(APP_ROUTES);