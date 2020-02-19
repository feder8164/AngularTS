import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TaskService } from '../services/task.service';



@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {

  tasksList = []; // musi byc ta tablica poniewaz, z niej cos wyswietlam

  constructor(private tasksService: TaskService) { // musimy zainicjalizowac liste zadan
      this.tasksService.getTasksListObs().subscribe(tasks => { // wysyla observable ktorego mozemy subskrybowac
          this.tasksList = tasks; // przypisujemy to co do nas przyszlo
      } );
  }
 

  

  removeTask(task) {
   this.tasksService.removeTask(task);
  }
  doneTask(task){
    this.tasksService.doneTask(task);
  }

  

  ngOnInit() {}
}