import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-list-done',
  templateUrl: './task-list-done.component.html',
  styleUrls: ['./task-list-done.component.css'],
  //----------------//Styl ten bedzie teraz globalny
  encapsulation: ViewEncapsulation.None 
})
export class TaskListDoneComponent implements OnInit {


  @Input()
  taskListdone = [];

  

  @Output()
  eventRemoveTaskDone = new EventEmitter<string>();


 

  removeTaskdone(task){
    console.log(task)
    this.eventRemoveTaskDone.emit(task);
  }
  

  getColor(): string{
    
    return this.taskListdone.length >= 5 ? 'red' : 'green';
     
  }


  constructor() { }

  ngOnInit() {
    
  
  }

}