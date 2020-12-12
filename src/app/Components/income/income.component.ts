import { Component, OnInit } from '@angular/core';
declare function vacuum(): any;

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onClick() {
    vacuum();
  }
}
