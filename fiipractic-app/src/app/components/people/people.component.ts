import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleWithPetsService } from 'src/app/services';
import { Person } from 'src/app/models';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  public people: Person[] = [];
  public subscribers: Subscription[] = [];

  constructor(
    private service: PeopleWithPetsService,
    private apiService: APIService
  ) { }

  ngOnInit() {
    let obs = this.apiService.getPeople();
    obs.subscribe(
      (persons: Person[]) => {
        this.people = persons;
        console.log('Success');
        console.log(persons);
      },
      (error) => {
        console.log('Error');
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }

  remove(index: number) {
    this.service.removePerson(index);
  }
}
