import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../../navigation-category-type';

@Component({
  selector: 'app-society-search',
  templateUrl: './society-search.component.html',
  styleUrls: ['./society-search.component.css']
})
export class SocietySearchComponent implements OnInit {
  placeholder: string;
  addFilter: string;
  sortFilter: string;
  searchText: string;
  selectedCategory: Category;
  @Output() beClicked = new EventEmitter<string>();

  constructor() {
    this.placeholder = 'Rechercher une société';
    this.addFilter = 'Rechercher';
    this.sortFilter = '+Ajouter un marché';
  }

  onClick(): void {
    this.beClicked.emit(this.searchText);
    console.log(this.searchText);
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
