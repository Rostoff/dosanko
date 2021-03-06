import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../../navigation-category-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  placeholder: string;
  searchText: string;
  selectedCategory: Category;
  @Output() beClicked = new EventEmitter<string>();

  constructor() {
    this.placeholder = 'Société, Filiale, Nom, Prénom, N° marché, N° Affaire, Nom marché...';
  }

  onClick(): void {
    this.beClicked.emit(this.searchText);
  }

  onEnter() {
    this.onClick();
  }

  onSelect(category: Category) {
    this.selectedCategory = category;
  }

  ngOnInit() {
  }

}
