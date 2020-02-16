import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  tasksList = ['sprzatanie', 'gotowanie'];

  @ViewChild('childRef')
  ChildComponent: ChildComponent; // cała klasa export z child

  @ViewChild('inputText')
  input: ElementRef;

  selected(task): void{
    console.log(task);
  }

  add(input: HTMLInputElement){
    this.tasksList.push(input.value);
    this.ChildComponent.tasks = [];
    this.input.nativeElement.value  = ''; // mozna ustawaic parametry html tutaj
  }
}
