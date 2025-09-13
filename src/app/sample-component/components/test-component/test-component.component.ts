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

  constructor() {}

  updateNonTwoWay() {
    this.non_two_way++;
  }

  updateTwoWay() {
    this.two_way++;
    this.two_wayChange.emit(this.two_way);
  }
}
