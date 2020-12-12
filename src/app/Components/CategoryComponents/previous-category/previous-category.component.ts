import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-previous-category',
  templateUrl: './previous-category.component.html',
  styleUrls: ['./previous-category.component.scss'],
})
export class PreviousCategoryComponent implements OnInit {
  @Input() index: number;
  @Output() previousCategory: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {}

  onSubmit() {
    const newIndex = this.index - 1;
    this.previousCategory.emit(newIndex);
  }
}
