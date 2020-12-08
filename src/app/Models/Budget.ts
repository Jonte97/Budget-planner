import { Category } from './Category';
export class Budget {
  id: number;
  name: string;
  categories: Category[] = [];
  income: number;
  outgoing: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.categories = [];
    this.income = 0;
    this.outgoing = 0;
  }
}
