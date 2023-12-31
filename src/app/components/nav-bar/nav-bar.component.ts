import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  linksList : string[] = [];

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.linksList = this.router.url.split("/").filter(r => r!="");

  }

}
