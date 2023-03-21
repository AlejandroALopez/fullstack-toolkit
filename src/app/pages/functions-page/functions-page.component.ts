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

  functions: Function[] = []; // current functions being displayed
  languages: Language[] = LANGUAGES;

  functionCurrent: Function;
  languageCurrent: Language;

  section: 'languages' | 'functions' | 'single function' = 'languages';

  functionsJS: number = 3;
  totalFunctions: number = this.functionsJS;

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

  // get an array of all functions from a given language
  getFunctions(lang: Language): void { 
    this.functions = FUNCTIONS.filter((func) => {
      return func.language === lang.alias;
    });

    this.section = 'functions';
    this.languageCurrent = lang;
  };  

  setFunction(f: Function): void {
    this.section = 'single function';
    this.functionCurrent = f;
  }

  goToLanguages(): void {
    this.section = 'languages';
    this.languageCurrent = null;
    this.functionCurrent = null;
  }

  goToFunctions(): void {
    this.section = 'functions';
    this.functionCurrent = null;
  }
}
