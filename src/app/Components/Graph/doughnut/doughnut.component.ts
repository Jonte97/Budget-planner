import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  MultiDataSet,
} from 'ng2-charts';
import { Budget } from 'src/app/Models/Budget';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent implements OnInit {
  @Input() budget: Budget;

  budgetOutgoing: number;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['SciFi', 'Drama', 'Comedy'];
  public pieChartData: MultiDataSet = [[30, 66]];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private graphService: GraphService) {
    this.budget = new Budget();
    this.budgetOutgoing = 0;
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {}
}
