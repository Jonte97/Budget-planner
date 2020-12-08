import { Component, OnInit } from '@angular/core';
import { Budget } from '../../Models/Budget';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budget: Budget;
  constructor() {
    this.budget = new Budget();
  }

  ngOnInit(): void {
    this.budget = {
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
}
