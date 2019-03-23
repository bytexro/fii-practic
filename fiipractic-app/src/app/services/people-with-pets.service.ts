import { Injectable } from '@angular/core';
import { Person } from '../models/Person';
import { Pet } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PeopleWithPetsService {
  private people: Person[] = [
    {
      firstName: 'alex',
      lastName: 'Alexandrescu',
      pets: [
        { name: 'lulu' },
        { name: 'croco' },
        { name: 'caramea' },
        { name: 'hilos' }
      ]
    },
    {
      firstName: 'Mickey',
      lastName: 'h',
      pets: [
        { name: 'acadea' },
        { name: 'musca' },
        { name: 'ai_de_viata_ta' }
      ]
    },
  ];

  private persons$ = new BehaviorSubject(this.people);

  public getPeople(): Person[] {
    return this.people;
  }

  public async getPeopleAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.people);
      }, 5000);
    });
  }

  public addPerson(person: Person) {
    this.people.push(person);
    this.persons$.next(this.people);
  }

  public getPerson(index: number): Person {
    return this.people[index] || null;
  }

  public removePerson(index: number) {
    this.people.splice(index, 1);
    this.persons$.next(this.people);
  }

  public removePet(personIndex: number, petIndex: number) {
    let person: Person = this.people[personIndex];

    if (!person) { return; }

    let pet = person.pets && person.pets[petIndex];

    if (!pet) { return; }

    person.pets.splice(petIndex, 1);
  }

  public addPet(index: number, pet: Pet): boolean {
    const person: Person = this.people[index];
    if (!person) { return false; }

    if (!person.pets) {
      return !!(person.pets = [pet]);
    }

    return !!(person.pets.push(pet));
  }

  public getPersonsObservable() {
    return this.persons$;
  }
}
