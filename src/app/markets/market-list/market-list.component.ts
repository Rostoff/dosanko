import { Component, OnInit, Input } from '@angular/core';
import { MarketService } from '../../market.service';
import { Market } from '../../market.interface';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css'],
  providers: [MarketService]
})
export class MarketListComponent implements OnInit {

  markets: Market[];
  @Input() searchProperty: string;

  constructor(private MarketService: MarketService) { }

  ngOnInit() {
    this.markets = this.MarketService.getMarket();
  }

}
