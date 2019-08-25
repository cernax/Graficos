import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-char',
  templateUrl: './my-pie-char.component.html',
  styleUrls: ['./my-pie-char.component.css']
})
export class MyPieCharComponent implements OnInit {
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
