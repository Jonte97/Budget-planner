import { Component, Input, OnInit } from '@angular/core';
import { Budget } from 'src/app/Models/Budget';
import { BudgetItem } from 'src/app/Models/Budget-item';
import { Category } from 'src/app/Models/Category';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  @Input() budget: Budget;
  constructor(private budgetService: BudgetService) {
    this.budget = new Budget();
    this.category = new Category();
  }

  ngOnInit(): void {}

  //* Adds budgetitem
  addBudgetItem(BudgetItem: BudgetItem) {
    const newBudgetItem = this.budgetService.addBudgetItem(
      BudgetItem,
      this.category.budgetItems
    );
    this.category.budgetItems.push(newBudgetItem);
  }
  //* Removes budgetItem
  removeBudgetItem(budgetItem: BudgetItem) {
    this.budgetService.removeBudgetItem(budgetItem, this.category.budgetItems);
  }
}
