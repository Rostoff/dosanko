import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societys',
  templateUrl: './societys.component.html',
  styleUrls: ['./societys.component.css']
})
export class SocietysComponent implements OnInit {

  search: string;
  validate: boolean;

  constructor() { }

  onValidate($event) {
    this.search = $event;
  }

  onDetails() {
    this.validate = true;
    console.log(this.validate);
  }


  ngOnInit() {
    this.validate = false;
  }

}
