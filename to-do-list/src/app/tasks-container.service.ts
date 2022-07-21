import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TasksContainerService {
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
