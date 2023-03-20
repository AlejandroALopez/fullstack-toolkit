import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-functions-page',
  templateUrl: './functions-page.component.html',
  styleUrls: ['./functions-page.component.scss']
})
export class FunctionsPageComponent {

  functionsJS : number = 3;

  totalFunctions : number = this.functionsJS;

  public pieChartLabels = [ 'JS' ];
  public pieChartDatasets = [ {
    data: [ this.functionsJS ],
    backgroundColor: [ 'rgba(255, 236, 85, 1)' ],
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
}
