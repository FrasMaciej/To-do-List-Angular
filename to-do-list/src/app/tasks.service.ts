import { Injectable } from '@angular/core';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];

  constructor() { }

  addNewTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
    return this.tasks;
  }
}
