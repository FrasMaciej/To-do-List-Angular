import { Component} from '@angular/core';
import { TasksService } from '../tasks.service';

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

}
