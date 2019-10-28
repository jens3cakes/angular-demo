import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})

export class BackendService {
  baseUrl: string = 'https://swapi.co/api';

  constructor(private http: HttpClient) {
    //first dependancy to be run no axios is needed(private means to only use within this file)
  }

  getPeople() {
    return this.http.get(`${this.baseUrl}/people/4`).toPromise();
  }

  login(user) {
    return Promise.resolve({
      id:user.id,
      username: user.username
    });
  }

  logout() {
    return Promise.resolve({});
  }

  register() {
    return Promise.resolve({});
  }


}