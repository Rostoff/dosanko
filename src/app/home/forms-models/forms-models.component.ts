import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-models',
  templateUrl: './forms-models.component.html',
  styleUrls: ['./forms-models.component.css']
})
export class FormsModelsComponent implements OnInit {

  download: string;

  constructor() {
    this.download = 'Télécharger';
  }

  ngOnInit() {
  }

}
