import { Component, OnInit, Input } from '@angular/core';
import { Society } from '../../society.interface';
import { SOCIETY } from '../../society.mock';

@Component({
  selector: 'app-society-list-details',
  templateUrl: './society-list-details.component.html',
  styleUrls: ['./society-list-details.component.css']
})
export class SocietyListDetailsComponent implements OnInit {

  @Input() society: Society;

  constructor() { }

  ngOnInit() {
  }

}
