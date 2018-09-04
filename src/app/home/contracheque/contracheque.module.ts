import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContrachequeComponent } from './contracheque.component';
import { ContrachequeDetailComponent } from './contracheque-detail/contracheque-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ContrachequeComponent,
    ContrachequeDetailComponent
  ]
})
export class ContrachequeModule { }
