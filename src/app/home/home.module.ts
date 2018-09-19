import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterarDadosModule } from './alterar-dados/alterar-dados.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterByDescricaoPipe } from './menu/filter-by-descricao.pipe';
import { NomePipePipe } from './nome-pipe.pipe';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { OuvidoriaModule } from './ouvidoria/ouvidoria.module';
import { ProcessoModule } from './processo/processo.module';
import { FichaFinanceiraModule } from './ficha-financeira/ficha-financeira.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SolicitacaoModule,
    AlterarDadosModule,
    RouterModule,
    OuvidoriaModule,
    ProcessoModule,
    FichaFinanceiraModule,
    LoaderModule
  ],
  declarations: [ 
    HomeComponent, 
    MenuComponent, 
    NotificacaoComponent,  
    WelcomeComponent, 
    FilterByDescricaoPipe,
    NomePipePipe
  ]
})
export class HomeModule { }
