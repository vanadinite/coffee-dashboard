import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkTypeWidgetComponent } from './drink-type-widget.component';

import { ChartModule } from 'primeng/components/chart/chart';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    DrinkTypeWidgetComponent
  ],
  exports: [
    DrinkTypeWidgetComponent
  ]
})

export class DrinkTypeWidgetModule { }
