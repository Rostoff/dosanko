import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  search: string;

  constructor() {
  }

  beValidate($event) {
    this.search = $event;
  }

  ngOnInit() {
  }

}
