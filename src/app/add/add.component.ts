import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { TaskService } from "../services/task.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  constructor(private tasksService: TaskService) {}

  addTask: string;

  pushTask(task) {
    this.tasksService.selectedTask(this.addTask);
    console.log(this.addTask);
    this.addTask = "";
  }

  ngOnInit() {}
}
