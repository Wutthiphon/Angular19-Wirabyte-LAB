import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test-component',
  standalone: false,
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent {
  @Input() non_two_way: number = 0;
  @Input() two_way: number = 0;
  @Output() two_wayChange = new EventEmitter<any>();

  text_input: string = '';
  pipe = {
    date: new Date(),
    uppercase: 'uppercase text',
    lowercase: 'LOWERCASE TEXT',
    currency: 12345.6789,
    percent: 0.876,
    number: 123456789,
    reverse: 'reverse',
  };

  constructor() {}

  updateNonTwoWay() {
    this.non_two_way++;
  }

  updateTwoWay() {
    this.two_way++;
    this.two_wayChange.emit(this.two_way);
  }
}
