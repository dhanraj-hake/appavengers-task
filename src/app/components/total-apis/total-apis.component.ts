import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-total-apis',
  templateUrl: './total-apis.component.html',
  styleUrls: ['./total-apis.component.css']
})
export class TotalApisComponent implements OnInit {

  public chart : any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }


  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'doughnut', 

      data:{
        labels: [
          'GET',
          'PUT',
          'POST',
          'DELETE',
        ],
        datasets: [{
          label: '',
          data: [300, 50, 100, 150,],
          backgroundColor: [
            'rgba(0, 128, 0, 0.471)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgba(255, 0, 0, 0.499)',
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio:2.2
      }
      
    });
  }

}
