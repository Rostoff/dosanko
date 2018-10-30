import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societys',
  templateUrl: './societys.component.html',
  styleUrls: ['./societys.component.css']
})
export class SocietysComponent implements OnInit {

  search: string;
  validate: boolean;
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

  onValidate($event) {
    this.search = $event;
  }

  onDetails() {
    this.validate = true;
    console.log(this.validate);
  }


  ngOnInit() {
    this.validate = false;
  }

}
