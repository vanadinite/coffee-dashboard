import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DrinkTypeWidgetModule } from './drink-type-widget/drink-type-widget.module';
import { RoastWidgetModule } from './roast-widget/roast-widget.module';
import { CoffeePurchasesWidgetModule } from './coffee-purchases-widget/coffee-purchases-widget.module';
import { FavoriteCoffeeBrandsWidgetModule} from './favorite-coffee-brands-widget/favorite-coffee-brands-widget.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DrinkTypeWidgetModule,
    RoastWidgetModule,
    CoffeePurchasesWidgetModule,
    FavoriteCoffeeBrandsWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
