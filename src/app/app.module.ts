import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './segurado/login/login.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
