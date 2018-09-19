import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FichaFinanceiraComponent } from './ficha-financeira.component';
import { VizualizaFichaComponent } from './vizualiza-ficha/vizualiza-ficha.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [
    FichaFinanceiraComponent,
    VizualizaFichaComponent
  ]
})
export class FichaFinanceiraModule { }
