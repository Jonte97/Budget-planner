import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-next-category',
  templateUrl: './next-category.component.html',
  styleUrls: ['./next-category.component.scss'],
})
export class NextCategoryComponent implements OnInit {
  @Input() index: number;
  @Input() categoryCount: number;
  @Output() nextCategory: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.index = 0;
    this.categoryCount = 0;
  }

  ngOnInit(): void {}

  onSubmit() {
    const newIndex = this.index + 1;
    this.nextCategory.emit(newIndex);
  }
}
