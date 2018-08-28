import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarketService } from '../../market.service';
import { Market } from '../../market.interface';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css'],
  providers: [MarketService]
})
export class MarketListComponent implements OnInit, OnChanges {

  markets: Market[];
  @Input() searchProperty: string;

  constructor(private MarketService: MarketService) { }

  ngOnInit() {
    this.markets = this.MarketService.getMarket();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchProperty) {
      this.markets = this.filterMarket(this.MarketService.getMarket(),
    changes.searchProperty.currentValue);
    }
  }

  filterMarket(markets: Market[], searchProperty: string): Market[] {
    if (!searchProperty) {  //Si searchProperty est non défini ou vide, renvoyer le tableau sans le filtrer
      return markets;
    }
    let marketFiltered = [];

    for (let market of markets) {
        const titleLowerCase = market.name.toLowerCase();
        if (titleLowerCase.indexOf(searchProperty) !== -1) {
          marketFiltered.push(market);

    }
  }
  return marketFiltered;
}
}
