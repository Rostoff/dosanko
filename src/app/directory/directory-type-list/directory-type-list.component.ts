import { Component, OnInit } from '@angular/core';
import { DirectoryType } from '../../directory-type';
import { DIRECTORYTYPE } from '../../mock-directory-type-list';

@Component({
  selector: 'app-directory-type-list',
  templateUrl: './directory-type-list.component.html',
  styleUrls: ['./directory-type-list.component.css']
})
export class DirectoryTypeListComponent implements OnInit {

  directoryTypeList = DIRECTORYTYPE;
  selectedCategory: DirectoryType;

  constructor() { }

  onSelect(category: DirectoryType) {
    this.selectedCategory = category;
  }

  ngOnInit() {
    this.selectedCategory = {id: 1, name: 'Society', url: '/directory/directory-society'};
  }

}
