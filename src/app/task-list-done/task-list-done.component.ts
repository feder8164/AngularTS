import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list-done',
  templateUrl: './task-list-done.component.html',
  styleUrls: ['./task-list-done.component.css']
})
export class TaskListDoneComponent implements OnInit {

  //--------------@Input-------------------//Odbieranie danych

  @Input()
  taskListdone = [];

  //--------------@Output-------------------//Wysyłanie danych

  @Output()
  eventRemoveTaskDone = new EventEmitter<string>();


  //--------------Metody-------------------//

  removeTaskdone(task){
    console.log(task)
    this.eventRemoveTaskDone.emit(task);
  }
  //--------------ngStyle-------------------//Dynamiczne style

  getColor(): string{
    
    return this.taskListdone.length >= 5 ? 'red' : 'green';
     
  }



  constructor() { }

  ngOnInit() {
  }

}
