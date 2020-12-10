import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { BudgetItemComponent } from './Components/budget-item/budget-item.component';
import { CategoryComponent } from './Components/category/category.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { AddBudgetItemComponent } from './Components/add-budget-item/add-budget-item.component';
import { NextCategoryComponent } from './Components/next-category/next-category.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BudgetItemComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddBudgetItemComponent,
    NextCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
