import { Authorization } from './services/jwt.service';
import { BackendService } from './services/backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './segurado/login/login.component';
import { routing } from './app.routes';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LogadoComponent } from './logado/logado.component';
import { UserService } from './services/user.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ForgotPasswordComponent } from './segurado/forgot-password/forgot-password.component';
import { FirstVerificationComponent } from './segurado/forgot-password/first-verification/first-verification.component';
import { ChangePasswordComponent } from './segurado/forgot-password/change-password/change-password.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    LogadoComponent, 
    ErrorMessageComponent, 
    ForgotPasswordComponent, 
    FirstVerificationComponent, 
    ChangePasswordComponent, 
    CpfMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    Authorization,
    BackendService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
