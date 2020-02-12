import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = `robaku`

  dog: Dog; //obiekt typu dog
}

class Dog {
  constructor(public name: string, public age: number){ 
    //musi być public żeby pole było widoczne
  }
}