import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpExampleService {
  constructor(
    private http: HttpClient
  ) { }

  public getPerson() {
    this.http.get('link/server/person')
      .subscribe(response => {
        console.log(response); // response
      }, error => {
        console.log(error); // error
      });
  }

  public postPerson(person) {
    this.http.post(
      'link/to/server',
      person,
      {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data'
        }),
        params: {
          query_param_1: 'value1',
          query_param_2: 'value2',
          query_param_3: 'value3'
        }
      }
    ).subscribe(response => { }, error => { });
  }

  public putPerson(person) {
    this.http.put('link/to/server', person)
      .subscribe(response => { }, error => { });
  }

  public deletePerson(personId) {
    this.http.delete('link/to/server/' + personId)
      .subscribe(response => { }, error => { });
  }
}
