import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  partOne: string;
  partTwo: string;

  constructor() {
    this.partOne = 'Gestion des accès';
    this.partTwo = 'Gestion des modèles et formulaires';
  }

  ngOnInit() {
  }

}
