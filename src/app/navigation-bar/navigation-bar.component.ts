import { Component, OnInit } from '@angular/core';
import { Category } from '../navigation-category-type';
import { CATEGORY } from '../mock-navigation-category-list';
import { CATEGORY_BIS } from '../mock-navigation-category-list';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  categorys = CATEGORY;
  categoryBis = CATEGORY_BIS;
  selectedCategory: Category;

  constructor() { }

  onSelect(category: Category) {
    this.selectedCategory = category;
  }

  ngOnInit() {
  }

}
