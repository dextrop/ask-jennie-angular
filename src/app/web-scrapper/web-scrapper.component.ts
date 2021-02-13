import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-scrapper',
  templateUrl: './web-scrapper.component.html',
  styleUrls: ['./web-scrapper.component.css']
})
export class WebScrapperComponent implements OnInit {
  main_html:any = "";
  main_json:any = "";
  _state_json:any = false;
  sample_html = "";
  constructor() { }

  ngOnInit(): void {
  }

  show_json() {}

  clear_json() {};

  add_sample_html() {};
}
