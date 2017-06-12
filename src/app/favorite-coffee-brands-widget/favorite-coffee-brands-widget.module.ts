import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteCoffeeBrandsWidgetComponent } from './favorite-coffee-brands-widget.component';

import { OrderListModule } from 'primeng/components/orderList/orderList';

@NgModule({
  imports: [
    CommonModule,
    OrderListModule
  ],
  declarations: [
    FavoriteCoffeeBrandsWidgetComponent
  ],
  exports: [
    FavoriteCoffeeBrandsWidgetComponent
  ]
})
export class FavoriteCoffeeBrandsWidgetModule { }
