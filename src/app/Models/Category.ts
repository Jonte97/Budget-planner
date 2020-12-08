import { BudgetItem } from './Budget-item';
export class Category {
  name: string;
  budgetItems: BudgetItem[] = [];

  constructor() {
    this.name = '';
    this.budgetItems = [];
  }
}
