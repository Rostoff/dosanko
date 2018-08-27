import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  search: string;

  constructor() { }

  onValidate($event) {
    this.search = $event;
  }

  ngOnInit() {
  }

}
