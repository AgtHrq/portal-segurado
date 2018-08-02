import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterByDescricaoPipe } from './menu/filter-by-descricao.pipe';
import { ProcessoComponent } from './processo/processo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ 
    HomeComponent, 
    MenuComponent, 
    NotificacaoComponent, 
    WelcomeComponent, FilterByDescricaoPipe, ProcessoComponent
  ]
})
export class HomeModule { }