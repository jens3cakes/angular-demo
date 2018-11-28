import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //no javascript here
  title: string = 'angular-demo';

  characters: string[] = []
  show: boolean = false;

  constructor(){
    this.characters.push('SpongeBob');
    this.characters[1]=('Patrick');
    this.characters = this.characters.concat(['Squidward']);
  }
//method go below constructor
  toggle(e, title){
    console.log(e,title)
    console.log(this.title)
    this.show = !this.show;
  }


}
