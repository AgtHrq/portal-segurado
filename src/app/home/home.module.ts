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
import { ProcessoComponent } from './processo/processo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaskCpfPipe } from './processo/mask-cpf.pipe';
import { NomePipePipe } from './nome-pipe.pipe';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    SolicitacaoModule,
    AlterarDadosModule,
    RouterModule
  ],
  declarations: [ 
    HomeComponent, 
    MenuComponent, 
    NotificacaoComponent, 
    WelcomeComponent, 
    FilterByDescricaoPipe,
    MaskCpfPipe,
    ProcessoComponent,
    NomePipePipe
  ]
})
export class HomeModule { }
