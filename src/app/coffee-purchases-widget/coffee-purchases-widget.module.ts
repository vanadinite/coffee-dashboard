import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoffeePurchasesTableComponent } from './coffee-purchases-table/coffee-purchases-table.component';
import { CoffeeBrandCarouselComponent } from './coffee-brand-carousel/coffee-brand-carousel.component';
import { CoffeePurchasesWidgetComponent } from './coffee-purchases-widget.component';

import { DataTableModule } from 'primeng/components/dataTable/dataTable';
import { CarouselModule } from 'primeng/components/carousel/carousel';
import { RatingModule } from 'primeng/components/rating/rating';
import { GrowlModule } from 'primeng/components/growl/growl';
import { SharedModule } from 'primeng/components/common/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    CarouselModule,
    GrowlModule,
    SharedModule,
    RatingModule
  ],
  declarations: [
    CoffeePurchasesTableComponent,
    CoffeeBrandCarouselComponent,
    CoffeePurchasesWidgetComponent
  ],
  exports: [
    CoffeePurchasesWidgetComponent
  ]
})
export class CoffeePurchasesWidgetModule { }
