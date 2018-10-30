import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  partOne: string;
  partTwo: string;
  partThree: string;
  partFour: string;

  constructor() {
    this.partOne = 'Informations Générales';
    this.partTwo = 'Habilitation';
    this.partThree = 'Document';
    this.partFour = 'Historique';
   }

  ngOnInit() {
  }

}
