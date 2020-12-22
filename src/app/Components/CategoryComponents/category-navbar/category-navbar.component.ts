import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Budget } from 'src/app/Models/Budget';
import { Category } from 'src/app/Models/Category';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss'],
})
export class CategoryNavbarComponent implements OnInit {
  @Input() categories: Category[];
  @Output() navigateTo: EventEmitter<any> = new EventEmitter();
  @Output() setIncomePage: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.categories = [];
  }

  ngOnInit(): void {}

  navigate(id: number) {
    this.navigateTo.emit(id);
  }
  navigateIncome() {
    this.setIncomePage.emit();
  }
}
