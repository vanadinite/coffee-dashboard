import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoastWidgetComponent } from './roast-widget.component';

import { ChartModule } from 'primeng/components/chart/chart';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    RoastWidgetComponent
  ],
  exports: [
    RoastWidgetComponent
  ]
})
export class RoastWidgetModule { }
