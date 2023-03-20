import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FunctionsPageComponent } from './pages/functions-page/functions-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'functions', component: FunctionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
