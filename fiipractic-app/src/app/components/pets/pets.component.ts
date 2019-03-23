import { Component, OnInit } from '@angular/core';
import { PeopleWithPetsService } from 'src/app/services';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  public people: Person[] = [];

  constructor(
    private service: PeopleWithPetsService
  ) { }

  ngOnInit() {
    this.service.getPersonsObservable().subscribe(people => {
      this.people = people;
    });
  }

  removePet(personIndex, petIndex) {
    this.service.removePet(personIndex, petIndex);
  }

}
