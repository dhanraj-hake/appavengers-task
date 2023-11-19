import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent,
    children : [
      {
        path : "report",
        component : ReportsComponent
      },
      {
        path : "setting",
        component : SettingsComponent
      },
    ]
  },
  {
    path : "",
    component : HomePageComponent,
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
