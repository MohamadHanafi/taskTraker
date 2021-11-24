import { Injectable } from '@angular/core';
import { observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  subject = new Subject<any>();

  constructor() {}

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle() {
    return this.subject.asObservable();
  }
}
