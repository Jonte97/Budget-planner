import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/Models/Budget-item';
import { Category } from 'src/app/Models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  constructor() {
    this.category = new Category();
  }

  ngOnInit(): void {}
}
