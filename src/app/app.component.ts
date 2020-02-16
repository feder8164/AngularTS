import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  title = "Nauka";
  dog = new Dog("Reksio");
  show = true;

  changeTitle(){
    this.title = "Angular jest fajny!"; // to jest zupelnie cos innego wiec wykruje zmiany
  }

  changeDog(){
    this.dog.name = "Ciapek"; // nie wywołuje sie ponieważ sprawdza gdy zmieni się referencja
    // this.dog = new Dog("Szarik"); // tutaj wykrywa zmiany ponieważ zmiena sie referencja
  }

  nothing(){

  }

  destory(){
    this.show = !this.show
  }
  
}

export class Dog{
  constructor(public name: string){

  }
}
