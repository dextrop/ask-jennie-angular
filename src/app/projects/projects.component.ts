import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
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

  goto(link:any) {
    this.router.navigate([link])
  }


}
