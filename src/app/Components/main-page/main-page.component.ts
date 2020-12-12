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
  categoryCount: number;

  constructor(private budgetService: BudgetService) {
    this.budget = new Budget();
    this.activeCategory = new Category();
    this.categoryIndex = 0;
    this.categoryCount = 0;
  }

  ngOnInit(): void {
    //!Gets testbudget
    this.budget = this.budgetService.getBudget();
    this.activeCategory = this.budget.categories[this.categoryIndex];
    this.categoryCount = this.budget.categories.length - 1;
  }
  //*Updates site
  update() {
    this.categoryCount = this.budget.categories.length - 1;
  }

  //* Set active category
  setActiveCategory(newIndex: number) {
    this.categoryIndex = newIndex;
    this.activeCategory = this.budget.categories[this.categoryIndex];
    this.update();
  }

  //*Adding new category to categoryList
  addCategory(category: Category) {
    const newCategory = this.budgetService.addCategory(
      category,
      this.budget.categories
    );
    this.budget.categories.push(newCategory);
    this.update();
  }

  //* Removes category from categorylist
  removeActiceCategory(category: Category) {
    this.budget.categories = this.budgetService.removeCategory(
      category,
      this.budget.categories
    );
    this.setActiveCategory(0);
    this.update();
  }
}
