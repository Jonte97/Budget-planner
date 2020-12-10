import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-next-category',
  templateUrl: './next-category.component.html',
  styleUrls: ['./next-category.component.scss'],
})
export class NextCategoryComponent implements OnInit {
  @Input() index: number;
  @Output() nextCategory: EventEmitter<any> = new EventEmitter();
  currentIndex: number;
  constructor() {
    this.currentIndex = 0;
    this.index = 0;
  }

  ngOnInit(): void {}

  onSubmit() {
    const newIndex = this.index + 1;
    console.log(newIndex);
    this.nextCategory.emit(newIndex);
  }
}
