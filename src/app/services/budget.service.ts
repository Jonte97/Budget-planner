import { Injectable } from '@angular/core';
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
      income: 1000,
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
      value: 0,
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
}
