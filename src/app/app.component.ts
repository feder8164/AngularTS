import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = `robaku`;

  days: string[] = ['Pon', 'Wto', 'Sr'];

  dogs = new Array<Dog>(); // lista nowych obiektow

  constructor(){
    this.dogs.push(new Dog('REKSIO',4), new Dog('Latek',3),
    new Dog('Lolek', 5));
  }



}

class Dog {
  constructor(public name: string, public age: number){ 
    //musi być public żeby pole było widoczne
  }
}