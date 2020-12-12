import { BudgetItem } from './Budget-item';
export class Category {
  id: number;
  name: string;
  budgetItems: BudgetItem[] = [];

  constructor() {
    this.id = 0;
    this.name = '';
    this.budgetItems = [];
  }
}
