import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeModule } from './home/home.module';
import { Authorization } from './services/jwt.service';
import { BackendService } from './services/backend.service';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { UserService } from './services/user.service';
import { CadastrarService } from './services/cadastrar/cadastrar.service';

import { AuthGuard } from './services/guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { DirectivesModule } from './directives/directives.module';
import { SeguradoModule } from './segurado/segurado.module';
import { ErrorMessageModule } from './error-message/error-message.module';
import { GoogleAnalyticsModule } from 'angular-ga';
import { CloseModalDirective } from './directives/close-modal.directive';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleAnalyticsModule.forRoot(),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HomeModule,
    AdminModule,
    DirectivesModule,
    routing,
    SeguradoModule,
    ErrorMessageModule
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
