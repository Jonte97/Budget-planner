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
  constructor(private budgetService: BudgetService) {
    this.budget = new Budget();
  }

  ngOnInit(): void {
    //!Gets testbudget
    this.budget = this.budgetService.getBudget();
  }

  addCategory(category: Category) {
    const newCategory = this.budgetService.addCategory(category);
    this.budget.categories.push(newCategory);
  }
}
