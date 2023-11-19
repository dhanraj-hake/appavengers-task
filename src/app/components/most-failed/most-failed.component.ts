import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-most-failed',
  templateUrl: './most-failed.component.html',
  styleUrls: ['./most-failed.component.css']
})
export class MostFailedComponent implements OnInit {

  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }


  createChart() {

    this.chart = new Chart("MyChart3", {
      type: 'bar',
      data: {
        labels: [
          'GET',
          'PUT',
          'POST',
          'DELETE',
        ],
        datasets: [{
          // axis: 'y',
          label: "",
          data: [65, 59, 80, 81,],
          // fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        
      }

    });
  }

}
