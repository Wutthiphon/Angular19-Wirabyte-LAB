import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  non_two_way_value: number = 1;
  two_way_value: number = 1;

  constructor() {}

  updateNonTwoWay() {
    this.non_two_way_value++;
  }

  updateTwoWay() {
    this.two_way_value++;
  }
}
