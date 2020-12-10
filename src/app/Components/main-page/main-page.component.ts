import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { Budget } from '../../Models/Budget';
import { BudgetService } from '../../services/budget.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budget: Budget;
  activeCategory: Category;
  categoryIndex: number; //! Rename this?
  constructor(private budgetService: BudgetService) {
    this.budget = new Budget();
    this.activeCategory = new Category();
    this.categoryIndex = 0;
  }

  ngOnInit(): void {
    //!Gets testbudget
    this.budget = this.budgetService.getBudget();
    this.activeCategory = this.budget.categories[this.categoryIndex];
  }

  nextCategory(newIndex: number) {
    this.categoryIndex = newIndex;
    console.log(newIndex);
    this.activeCategory = this.budget.categories[this.categoryIndex];
  }

  addCategory(category: Category) {
    const newCategory = this.budgetService.addCategory(category);
    this.budget.categories.push(newCategory);
  }
}
