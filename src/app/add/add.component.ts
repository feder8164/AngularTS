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

  pushTask() {
    const task: Task = {name: this.addTask, created: new Date()}
    this.tasksService.selectedTask(task);
    console.log(this.addTask);
    this.addTask = "";
  }

  ngOnInit() {}
}
