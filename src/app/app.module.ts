import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { TestExecutionComponent } from './components/test-execution/test-execution.component';
import { TotalApisComponent } from './components/total-apis/total-apis.component';
import { TestExecutionChartComponent } from './components/test-execution-chart/test-execution-chart.component';
import { MostFailedComponent } from './components/most-failed/most-failed.component';
import { AvgResponseComponent } from './components/avg-response/avg-response.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    SettingsComponent,
    HomePageComponent,
    SideBarComponent,
    NavBarComponent,
    TestExecutionComponent,
    TotalApisComponent,
    TestExecutionChartComponent,
    MostFailedComponent,
    AvgResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
