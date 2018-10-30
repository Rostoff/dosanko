import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-search',
  templateUrl: './personal-search.component.html',
  styleUrls: ['./personal-search.component.css']
})
export class PersonalSearchComponent implements OnInit {

  placeholder: string;

  constructor() {
    this.placeholder = 'Rechercher un personnel';
  }

  ngOnInit() {
  }

}
