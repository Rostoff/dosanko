import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  placeholder: string;
  addFilter: string;
  buttonOne: string;
  buttonTwo: string;
  buttonThree: string;
  searchText: string;
  @Output() beClicked = new EventEmitter<string>();

  constructor() {
    this.placeholder = 'Filtre: Aucun filtre';
    this.addFilter = '+ Ajouter un filtre';
    this.buttonOne = 'Rechercher les sociétés';
    this.buttonTwo = 'Rechercher les personnels';
    this.buttonThree = 'Rechercher les marchés';
  }

  onClick(): void {
    this.beClicked.emit(this.searchText);
  }

  onEnter() {
    this.onClick();
  }

  ngOnInit() {
  }

}
