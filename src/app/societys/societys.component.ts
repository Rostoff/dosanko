import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societys',
  templateUrl: './societys.component.html',
  styleUrls: ['./societys.component.css']
})
export class SocietysComponent implements OnInit {

  search: string;

  constructor() { }

  onValidate($event) {
    this.search = $event;
  }

  ngOnInit() {
  }

}
