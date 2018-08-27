import { Injectable } from '@angular/core';
import { Society } from './society.interface';
import { SOCIETY } from './society.mock';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor() { }

  getSociety(): Array<Society> {
    return SOCIETY;
  }
}
