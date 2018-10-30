import { Component, OnInit } from '@angular/core';
import { Personal } from '../../personal.interface';
import { PERSONAL } from '../../personal.mock';
import { PersonalService } from '../../personal.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent implements OnInit {

  personals: Personal[];

  constructor(private PersonalService: PersonalService) { }

  ngOnInit() {
    this.personals = this.PersonalService.getPersonal();
  }

}
