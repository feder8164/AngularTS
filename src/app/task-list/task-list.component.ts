import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
  
})
export class TaskListComponent implements OnInit {
  @Input()
  tasksList = [];

  @Output()
  eventRemoveTask = new EventEmitter<string>();

  @Output()
  eventTaskDone = new EventEmitter<string>();

  removeTask(task) {
    this.eventRemoveTask.emit(task);
  }
  doneTask(task){
    this.eventTaskDone.emit(task);
  }

  constructor() {}

  ngOnInit() {}
}