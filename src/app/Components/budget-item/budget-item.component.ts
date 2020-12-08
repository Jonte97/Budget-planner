import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/app/Models/Budget-item';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss'],
})
export class BudgetItemComponent implements OnInit {
  @Input() budgetItem: BudgetItem;
  constructor() {
    this.budgetItem = new BudgetItem();
  }

  ngOnInit(): void {}
}
