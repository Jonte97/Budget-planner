import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  @Output() addCategory: EventEmitter<any> = new EventEmitter();

  categoryName: string;
  constructor() {
    this.categoryName = '';
  }

  ngOnInit(): void {}

  onSubmit() {
    const category = {
      name: this.categoryName,
    };
    this.addCategory.emit(category);
  }
}
