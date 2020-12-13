import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-budget-item',
  templateUrl: './add-budget-item.component.html',
  styleUrls: ['./add-budget-item.component.scss'],
})
export class AddBudgetItemComponent implements OnInit {
  @Output() addBudgetItem: EventEmitter<any> = new EventEmitter();
  budgetItemName: string;
  value?: number;
  constructor() {
    this.budgetItemName = '';
  }

  ngOnInit(): void {}
  onSubmit() {
    const budgetItem = {
      name: this.budgetItemName,
      value: this.value,
    };
    this.addBudgetItem.emit(budgetItem);
    this.budgetItemName = '';
    this.value = undefined;
  }
}
