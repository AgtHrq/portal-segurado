import { DirfModule } from './dirf/dirf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterarSenhaModule } from './alterar-senha/alterar-senha.module';
import { AlterarDadosModule } from './alterar-dados/alterar-dados.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterByDescricaoPipe } from './menu/filter-by-descricao.pipe';
import { NomePipePipe } from './nome-pipe.pipe';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { ProcessoModule } from './processo/processo.module';
import { FichaFinanceiraModule } from './ficha-financeira/ficha-financeira.module';
import { LoaderModule } from '../loader/loader.module';
import { ContrachequeModule } from './contracheque/contracheque.module';
import { AdminSubmenuModule } from '../admin/admin-submenu/admin-submenu.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SolicitacaoModule,
    AlterarDadosModule,
    AlterarSenhaModule,
    RouterModule,
    ProcessoModule,
    FichaFinanceiraModule,
    LoaderModule,
    ContrachequeModule,
    LoaderModule,
    RouterModule,
    AdminSubmenuModule,
    DirfModule
  ],
  declarations: [ 
    HomeComponent, 
    MenuComponent, 
    NotificacaoComponent,  
    WelcomeComponent, 
    FilterByDescricaoPipe,
    NomePipePipe
  ],
  exports: [
    NomePipePipe
  ]
})
export class HomeModule { }
