import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.css']
})
export class MarketSearchComponent implements OnInit {

  addFilter: string;
  sortFilter: string;
  placeholder: string;

  constructor() {
    this.addFilter = 'Rechercher';
    this.sortFilter = '+Ajouter un marché';
    this.placeholder = 'Rechercher un marché';
  }

  ngOnInit() {
  }

}
