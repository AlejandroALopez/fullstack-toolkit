import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FunctionsPageComponent } from './pages/functions-page/functions-page.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { NgChartsModule } from 'ng2-charts';
import { StylesPageComponent } from './pages/styles-page/styles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FunctionsPageComponent,
    NavigationHeaderComponent,
    StylesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
