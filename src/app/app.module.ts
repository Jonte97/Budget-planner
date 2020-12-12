import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { BudgetItemComponent } from './Components/BudgetItemComponents/budget-item/budget-item.component';
import { CategoryComponent } from './Components/CategoryComponents/category/category.component';
import { AddCategoryComponent } from './Components/CategoryComponents/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { AddBudgetItemComponent } from './Components/BudgetItemComponents/add-budget-item/add-budget-item.component';
import { NextCategoryComponent } from './Components/CategoryComponents/next-category/next-category.component';
import { PreviousCategoryComponent } from './Components/CategoryComponents/previous-category/previous-category.component';
import { RemoveCategoryComponent } from './Components/CategoryComponents/remove-category/remove-category.component';
import { CategoryNavbarComponent } from './Components/CategoryComponents/category-navbar/category-navbar.component';
import { IncomeComponent } from './Components/income/income.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BudgetItemComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddBudgetItemComponent,
    NextCategoryComponent,
    PreviousCategoryComponent,
    RemoveCategoryComponent,
    CategoryNavbarComponent,
    IncomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
