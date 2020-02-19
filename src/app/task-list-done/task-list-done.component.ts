import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from  '../services/task.service';


@Component({
  selector: 'app-task-list-done',
  templateUrl: './task-list-done.component.html',
  styleUrls: ['./task-list-done.component.css']
})
export class TaskListDoneComponent implements OnInit {

  taskListdone = [];

  constructor(private tasksService: TaskService) { 

    this.tasksService.getTasksListDoneObs().subscribe(tasks => {
      this.taskListdone = tasks;
    });
  }

  removeTaskdone(task){
    this.tasksService.removeTaskdone(task);
    console.log(task)
    
  }


  

  ngOnInit() {
  }

}
