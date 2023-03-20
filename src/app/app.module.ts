import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FunctionsPageComponent } from './pages/functions-page/functions-page.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FunctionsPageComponent,
    NavigationHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
