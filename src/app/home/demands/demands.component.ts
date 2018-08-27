import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  demandButton: string;

  constructor() {
    this.demandButton = 'Faire une nouvelle demande';
  }

  ngOnInit() {
  }

}
