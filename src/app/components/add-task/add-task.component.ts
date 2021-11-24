import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please enter a task');
      return;
    }

    if (!this.day) {
      this.day = Date.now().toString();
    }

    const task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
