import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContrachequeComponent } from './contracheque.component';
import { ContrachequeDetailComponent } from './contracheque-detail/contracheque-detail.component';
import { OrgaoAbvPipe } from './orgao-abv.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContrachequePeriodoDetailComponent } from './contracheque-detail/contracheque-periodo-detail/contracheque-periodo-detail.component';
import { LoaderModule } from '../../loader/loader.module';
import { IdVinculoPipe } from './id-vinculo.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    LoaderModule
  ],
  declarations: [
    ContrachequeComponent,
    ContrachequeDetailComponent,
    OrgaoAbvPipe,
    ContrachequePeriodoDetailComponent,
    IdVinculoPipe
  ]
})
export class ContrachequeModule { }
