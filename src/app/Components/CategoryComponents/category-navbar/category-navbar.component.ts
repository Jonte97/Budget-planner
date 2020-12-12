import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss'],
})
export class CategoryNavbarComponent implements OnInit {
  @Input() categories: Category[];

  constructor() {
    this.categories = [];
  }

  ngOnInit(): void {}
}
