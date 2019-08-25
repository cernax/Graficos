import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyBarChartComponent} from './my-bar-chart/my-bar-chart.component';
import {MyDoughnutChartComponent} from './my-doughnut-chart/my-doughnut-chart.component';
import {MyRadarChartComponent} from './my-radar-chart/my-radar-chart.component';
import {MyPieCharComponent} from './my-pie-char/my-pie-char.component';
import {BrowserModule} from '@angular/platform-browser';
import {ChartsModule} from 'ng2-charts';


const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieCharComponent},
  {path: '**', component: MyBarChartComponent }];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
