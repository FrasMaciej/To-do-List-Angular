import { Component} from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  tasksList = this.tasksService.getTasks();

  constructor(
    private tasksService: TasksService,
  ) {}

  removeTask(task: Task){
    this.tasksService.removeTask(task)
  }

  onRemove(e: Event) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

}
