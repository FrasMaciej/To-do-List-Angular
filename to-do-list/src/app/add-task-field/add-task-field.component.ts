import { Component} from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-add-task-field',
  templateUrl: './add-task-field.component.html',
  styleUrls: ['./add-task-field.component.css']
})
export class AddTaskFieldComponent {
  value = '';

  constructor(
    private tasksService: TasksService
  ) {}

  addTask(content: string){
    const newTask = {
      description: content,
    } as Task
    this.tasksService.addNewTask(newTask)
  }

}
