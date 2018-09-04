import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.css']
})
export class MarketSearchComponent implements OnInit {

  addFilter: string;
  sortFilter: string;
  placeholder: string;
  @Output() beClicked = new EventEmitter<string>();
  searchText: string;

  constructor() {
    this.addFilter = 'Rechercher';
    this.sortFilter = '+Ajouter un marché';
    this.placeholder = 'Société, Filiale, Nom, Prénom, N° marché, N° Affaire, Nom marché...';
  }

  onClick() {
    this.beClicked.emit(this.searchText);
  }

  onEnter() {
    this.onClick();
  }

  ngOnInit() {
  }

}
