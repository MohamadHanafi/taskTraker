import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClicked = new EventEmitter();

  constructor() {
    this.text = 'Button';
    this.color = 'green';
  }

  ngOnInit(): void {}

  onClick() {
    this.btnClicked.emit();
  }
}
