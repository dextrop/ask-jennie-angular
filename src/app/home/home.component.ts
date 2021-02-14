import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subprojects = [
    {
      "name": "JSON Viewer",
      "description": "Converting any json to display as table, download as CSV or Excel.",
      "link": "jsonviewer"
    },
    {
      "name": "Webscrapper",
      "description": "Scrapping data from HTML as JSON Object",
      "link": "webscrapper"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
