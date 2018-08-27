import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SocietyService } from '../../society.service';
import { Society } from '../../society.interface';

@Component({
  selector: 'app-society-list',
  templateUrl: './society-list.component.html',
  styleUrls: ['./society-list.component.css'],
  providers: [SocietyService]
})
export class SocietyListComponent implements OnInit, OnChanges {

  societys: Society[];
  @Input() searchProperty: string;

  constructor(private SocietyService: SocietyService) { }

  ngOnInit() {
    this.societys = this.SocietyService.getSociety();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchProperty) {
        this.societys = this.filterSocietys(this.SocietyService.getSociety(), changes.searchProperty.currentValue);
    }
}

  filterSocietys(societys: Society[], searchProperty: string): Society[] {
    if (!searchProperty) {
      return societys;
    }
    let societysFiltered = [];
    for (let society of societys) {
    const nameLowerCase = society.name.toLowerCase();
          // const titleLowerCase = society.title.toLowerCase();
    if (nameLowerCase.indexOf(searchProperty) !== -1) {
        societysFiltered.push(society);
          }
    }
    return societysFiltered;


  }
}
