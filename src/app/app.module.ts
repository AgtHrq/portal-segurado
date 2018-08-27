import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeModule } from './home/home.module';
import { Authorization } from './services/jwt.service';
import { BackendService } from './services/backend.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './segurado/login/login.component';
import { routing } from './app.routes';
import { CadastroComponent } from './segurado/cadastro/cadastro.component';

import { UserService } from './services/user.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { Cadastro2Component } from './segurado/cadastro2/cadastro2.component';
import { CadastrarService } from './services/cadastrar/cadastrar.service';
import { ForgotPasswordComponent } from './segurado/forgot-password/forgot-password.component';
import { FirstVerificationComponent } from './segurado/forgot-password/first-verification/first-verification.component';
import { ChangePasswordComponent } from './segurado/forgot-password/change-password/change-password.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { SendEmailComponent } from './segurado/forgot-password/send-email/send-email.component';
import { LoaderComponent } from './loader/loader.component';
import { CadastroVerificaVinculo } from './segurado/cadastro-verifica-vinculo/cadastro-verifica-vinculo.component';

import { NgxCaptchaModule } from "ngx-captcha";
import { AuthGuard } from './services/guards/auth.guard';
import { LoaderModule } from './loader/loader.module';
import { OuvidoriaModule } from './home/ouvidoria/ouvidoria.module';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    CadastroComponent,
    ErrorMessageComponent, 
    Cadastro2Component, 
    ErrorMessageComponent, 
    ForgotPasswordComponent, 
    FirstVerificationComponent, 
    ChangePasswordComponent, 
    CpfMaskDirective, 
    SendEmailComponent, 
    LoaderComponent, CadastroVerificaVinculo
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgxCaptchaModule.forRoot({ reCaptcha2SiteKey: "6LdW42UUAAAAAAfI7C7ZzMRUy0cF6qr0YFgfA-3Q" }),
    HomeModule,
    OuvidoriaModule,
    LoaderModule,
    routing
  ],
  providers: [
    AuthGuard,
    Authorization,
    BackendService,
    UserService,
    CadastrarService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
