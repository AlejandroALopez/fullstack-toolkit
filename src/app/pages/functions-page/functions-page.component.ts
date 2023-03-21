import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Language, Function } from 'src/app/interfaces/Functions';

import { LANGUAGES, FUNCTIONS } from '../../data/functions-list';

@Component({
  selector: 'app-functions-page',
  templateUrl: './functions-page.component.html',
  styleUrls: ['./functions-page.component.scss']
})
export class FunctionsPageComponent {

  languages : Language[] = LANGUAGES;
  functionsJS : number = 3;
  totalFunctions : number = this.functionsJS;

  // Chart config

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

  // sorting algorithms

  // get an array of all functions from a given language
  getFunctions(lang : Language) : Function[] { 
    return FUNCTIONS.filter((func) => {
      return func.language === lang.name;
    });
  };  
}
