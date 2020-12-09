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
          name: 'Housing',
          budgetItems: [
            {
              name: 'Rent',
              value: 200,
            },
            {
              name: 'Loan',
              value: 500,
            },
          ],
        },
        {
          name: 'Cats',
          budgetItems: [
            {
              name: 'Food for Big Floof',
              value: 3,
            },
          ],
        },
      ],
    };
  }
  //* Add category
  addCategory(category: Category): Category {
    const result = {
      name: category.name,
      budgetItems: [],
    };
    return result;
  }

  //* Add a budgetItem
  addBudgetItem(budgetItem: BudgetItem): BudgetItem {
    const result = {
      name: budgetItem.name,
      value: 0,
    };
    return result;
  }
}
