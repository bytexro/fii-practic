import { Component, OnInit } from '@angular/core';
import { PeopleWithPetsService } from 'src/app/services';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public people: Person[] = [];

  constructor(
    private service: PeopleWithPetsService
  ) { }

  ngOnInit() {
    this.people = this.service.getPeople();
  }

  remove(index: number) {
    this.service.removePerson(index);
  }

}
