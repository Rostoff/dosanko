import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  partOne: string;
  partTwo: string;
  partThree: string;
  partFour: string;

  constructor() {
    this.partOne = 'Mes informations';
    this.partTwo = 'Modèles et formulaires';
    this.partThree = 'Mes demandes';
    this.partFour = 'Mes tâches';
   }

  ngOnInit() {
  }

}
