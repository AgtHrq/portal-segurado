import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TokenMaskDirective } from './validar-pdf/token-mask.directive';
import { ValidarPdfComponent } from './validar-pdf/validar-pdf.component';
import { AdminSolicitacaoModule } from '../admin/admin-solicitacao/admin-solicitacao.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Cadastro2Component } from './cadastro2/cadastro2.component';
import { CadastroVerificaVinculo } from './cadastro-verifica-vinculo/cadastro-verifica-vinculo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LoaderModule } from '../loader/loader.module';
import { ChangePasswordComponent } from './forgot-password/change-password/change-password.component';
import { FirstVerificationComponent } from './forgot-password/first-verification/first-verification.component';
import { SendEmailComponent } from './forgot-password/send-email/send-email.component';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DirectivesModule } from '../directives/directives.module';
import { AtualizarTermosComponent } from './atualizar-termos/atualizar-termos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AdminSolicitacaoModule,
    LoaderModule,
    ErrorMessageModule,
    NgxCaptchaModule.forRoot({ reCaptcha2SiteKey: "6LdW42UUAAAAAAfI7C7ZzMRUy0cF6qr0YFgfA-3Q" }),
    DirectivesModule
  ],
  declarations: [
    CadastroComponent,
    Cadastro2Component,
    CadastroVerificaVinculo,
    ForgotPasswordComponent,
    LoginComponent,
    ChangePasswordComponent,
    FirstVerificationComponent,
    SendEmailComponent,
    ValidarPdfComponent,
    TokenMaskDirective,
    AtualizarTermosComponent
  ]
})
export class SeguradoModule { }
