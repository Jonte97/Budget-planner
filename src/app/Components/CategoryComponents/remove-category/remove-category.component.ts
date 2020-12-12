import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.scss'],
})
export class RemoveCategoryComponent implements OnInit {
  @Input() activeCategory: Category;
  @Output() removeCategory: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.activeCategory = new Category();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.removeCategory.emit(this.activeCategory);
  }
}
