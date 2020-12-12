import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  @Input() income:number
  @Output() setIncome: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.income = 0;
  }
  ngOnInit(): void {}

  onChange(newIncome:number) {
    this.setIncome.emit(newIncome);
  }

}
