import { Injectable } from '@angular/core';
import { Personal } from './personal.interface';
import { PERSONAL } from './personal.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor() { }

  getPersonal(): Array<Personal> {
    return PERSONAL;
  }

}
