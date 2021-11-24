import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor(private TaskService: TaskService) {}

  ngOnInit(): void {}

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  onToggleReminder(task: Task) {
    this.toggleReminder.emit(task);
  }
}
