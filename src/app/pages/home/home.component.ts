import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  //selector will be determined by the router
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  content: string = '';
  ngOnInit() {
    console.log('OnInit has fired');
    this.content = 'Home Page'
  };
  title: string = 'angular-demo';

  characters: string[] = []
  show: boolean = false;
  person: object;


  constructor(private backend: BackendService) {
    this.characters.push('SpongeBob');
    this.characters[1] = ('Patrick');
    this.characters = this.characters.concat(['Squidward']);


    this.backend.getPeople()
      .then((data) => {
        this.person = data;
      })

  }
  //method go below constructor
  toggle(e, title) {
    console.log(e, title)
    console.log(this.title)
    this.show = !this.show;
  }


}