import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './segurado/login/login.component';
import { routing } from './app.routes';
import { CadastroComponent } from './segurado/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
