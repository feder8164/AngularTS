import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list-done',
  templateUrl: './task-list-done.component.html',
  styleUrls: ['./task-list-done.component.css']
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


  constructor() { }

  ngOnInit() {
  }

}
