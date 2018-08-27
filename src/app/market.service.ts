import { Injectable } from '@angular/core';
import { Market } from './market.interface';
import { MARKET } from './market.mock';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

  getMarket(): Array<Market> {
    return MARKET;
  }
}
