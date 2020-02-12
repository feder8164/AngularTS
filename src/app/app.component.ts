import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = `robaku`

  dog = new Dog(`adas`,3333);

  

  showDog(){
    return this.dog.name
  };
}

class Dog {
  constructor(public name: string, public age: number){ 
    //musi być public żeby pole było widoczne
    }
       showDog(){
         return this.name
       }
}