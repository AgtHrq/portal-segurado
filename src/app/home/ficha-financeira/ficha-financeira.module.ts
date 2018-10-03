import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FichaFinanceiraComponent } from './ficha-financeira.component';
import { VizualizaFichaComponent } from './vizualiza-ficha/vizualiza-ficha.component';
import { ContrachequeModule } from '../contracheque/contracheque.module';
import { FichaFinanceiraDetailComponent } from './ficha-financeira-detail/ficha-financeira-detail.component';
import { ImprimirFichaComponent } from './imprimir-ficha/imprimir-ficha.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ContrachequeModule
  ],
  declarations: [
    FichaFinanceiraComponent,
    VizualizaFichaComponent,
    FichaFinanceiraDetailComponent,
    ImprimirFichaComponent
  ]
})
export class FichaFinanceiraModule { }
