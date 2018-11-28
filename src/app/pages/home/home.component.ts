import { Component, OnInit } from '@angular/core';

@Component({
  //selector will be determined by the router
templateUrl:`./home.component.html`,
styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
content:string = '';
  ngOnInit(){
    console.log('OnInit has fired');
    this.content = 'Home Page'
  }
}