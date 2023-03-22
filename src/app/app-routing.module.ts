import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FunctionsPageComponent } from './pages/functions-page/functions-page.component';
import { StylesPageComponent } from './pages/styles-page/styles-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'functions', component: FunctionsPageComponent },
  { path: 'styles', component: StylesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
