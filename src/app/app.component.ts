import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  profession;
  skill;

  constructor(){

  }

  inputP(event){
    this.profession = event.target.value;
  }
  inputS(event){
    this.skill = event.target.value;
  }

}
