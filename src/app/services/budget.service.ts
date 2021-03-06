import { Injectable } from '@angular/core';
import { Budget } from '../Models/Budget';
import { BudgetItem } from '../Models/Budget-item';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  //*Get Categories testdata
  getBudget() {
    return {
      id: 1,
      name: 'Cool budget',
      income: 0,
      outgoing: 0,
      categories: [
        {
          id: 1,
          name: 'Housing',
          budgetItems: [
            {
              id: 1,
              name: 'Rent',
              value: 200,
            },
            {
              id: 2,
              name: 'Loan',
              value: 500,
            },
            {
              id: 3,
              name: 'Rent',
              value: 200,
            },
            {
              id: 4,
              name: 'Loan',
              value: 500,
            },
          ],
        },
        {
          id: 2,
          name: 'Cats',
          budgetItems: [
            {
              id: 1,
              name: 'Food for Big Floof',
              value: 3,
            },
          ],
        },
        {
          id: 3,
          name: 'Car',
          budgetItems: [
            {
              id: 1,
              name: 'Gas',
              value: 500,
            },
            {
              id: 2,
              name: 'Repairs',
              value: 1000,
            },
          ],
        },
      ],
    };
  }
  //* Add category
  addCategory(category: Category, list: Category[]): Category {
    const result = {
      id: list.length ? list[list.length - 1].id + 1 : 1,
      name: category.name,
      budgetItems: [],
    };
    return result;
  }

  //* Add a budgetItem
  addBudgetItem(budgetItem: BudgetItem, list: BudgetItem[]): BudgetItem {
    const result = {
      id: list.length ? list[list.length - 1].id + 1 : 1,
      name: budgetItem.name,
      value: budgetItem.value,
    };
    return result;
  }

  //* Remove Category
  removeCategory(category: Category, list: Category[]): Category[] {
    for (let i = 0; i < list.length; i++) {
      if (category.id === list[i].id) list.splice(i, 1);
    }
    return list;
  }

  //*Remove budgetItem
  removeBudgetItem(budgetItem: BudgetItem, list: BudgetItem[]) {
    for (let i = 0; i < list.length; i++) {
      if (budgetItem.id === list[i].id) list.splice(i, 1);
    }
  }

  //* SetOutGoing
  setOutGoing() {}

  //*SetIncome
  setIncome(newIncome: number, budget: Budget) {
    budget.income = newIncome;
  }

  getCategoryById(id: number, list: Category[]) {
    let category = <Category>list.find((obj) => {
      return obj.id === id;
    });
    return category;
  }
}
