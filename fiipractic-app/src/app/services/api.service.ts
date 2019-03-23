import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models';

@Injectable()
export class APIService {
  private api = environment.api;

  constructor(
    private http: HttpClient
  ) {}

  public getPeople() {
    return this.http.get(
      this.buildLink(this.api + '/')
    );
  }

  public addPerson(person: Person) {
    return this.http.post(
      this.buildLink(this.api + '/person'),
      person
    );
  }

  private buildLink(link: string) {
    return link + '?name=george';
  }
}
