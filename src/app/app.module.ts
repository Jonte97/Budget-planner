import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { BudgetItemComponent } from './Components/budget-item/budget-item.component';
import { CategoryComponent } from './Components/category/category.component';
@NgModule({
  declarations: [AppComponent, MainPageComponent, BudgetItemComponent, CategoryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
