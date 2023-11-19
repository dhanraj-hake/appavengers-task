import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avg-response',
  templateUrl: './avg-response.component.html',
  styleUrls: ['./avg-response.component.css']
})
export class AvgResponseComponent implements OnInit {

  constructor() { }

  data : {
    name : string,
    ms: number
  }[] = [
    {
      name : "Test Suite name 1",
      ms: 2409
    },
    {
      name : "Test Suite name 2",
      ms: 2409
    },
    {
      name : "Test Suite name 3",
      ms: 2409
    },
    {
      name : "Test Suite name 4",
      ms: 2409
    },
    {
      name : "Test Suite name 4",
      ms: 2409
    },
    {
      name : "Test Suite name 4",
      ms: 2409
    },
    {
      name : "Test Suite name 4",
      ms: 2409
    },

  ]


  ngOnInit(): void {
  }

}
