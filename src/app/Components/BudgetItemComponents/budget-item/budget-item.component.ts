import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { BudgetItem } from 'src/app/Models/Budget-item';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss'],
})
export class BudgetItemComponent implements OnInit {
  @Input() budgetItem: BudgetItem;
  @Output() removeItem: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.budgetItem = new BudgetItem();
  }

  ngOnInit(): void {}
  onChange(value: number) {
    console.log(value);
  }
  onSubmit() {
    this.removeItem.emit(this.budgetItem);
  }
}
