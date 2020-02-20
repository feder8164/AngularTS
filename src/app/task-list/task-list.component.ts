import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TaskService } from '../services/task.service';



@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {

  tasksList = []; 

  constructor(private tasksService: TaskService) { 
      this.tasksService.getTasksListObs().subscribe(tasks => { 
          this.tasksList = tasks.slice(); // przy pobieraniu listy, zwroci nowa ta sama liste ale z nowa referenca i angular wykryje cos
      } );
  }
 

  

  removeTask(task) {
   this.tasksService.removeTask(task);
  }
  doneTask(task){
    task.end = new Date(); 
    this.tasksService.doneTask(task);
  }

  

  ngOnInit() {}
}