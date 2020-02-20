import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddComponent } from './add/add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListDoneComponent } from './task-list-done/task-list-done.component';
import { TaskService } from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformPipe } from './shared/transform.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddComponent, TaskListComponent,TaskListDoneComponent, CheckedDirective, DateDirective, TransformPipe, SortNamePipe],
  bootstrap:    [ AppComponent ],
  providers: [TaskService]
})
export class AppModule { }
