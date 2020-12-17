import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor() {}
  getTotalCost(categories: Category[]): number {
    let totalCost: number = 0;
    categories.forEach((category) => {
      category.budgetItems.forEach((budgetItem) => {
        totalCost += budgetItem.value;
      });
    });

    return totalCost;
  }
}
