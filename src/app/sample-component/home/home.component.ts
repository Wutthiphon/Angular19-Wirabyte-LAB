import { Component } from '@angular/core';
import { DataService, User } from '../../services/data.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  non_two_way_value: number = 1;
  two_way_value: number = 1;

  users: User[] = [];

  input_username: string = '';

  constructor(
    private dataService: DataService,
    private tokenService: TokenService
  ) {
    this.dataService.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {},
    });
  }

  saveUsername() {
    this.tokenService.saveUsername(this.input_username);
  }
  clearUsername() {
    this.tokenService.clearUsername();
  }

  updateNonTwoWay() {
    this.non_two_way_value++;
  }

  updateTwoWay() {
    this.two_way_value++;
  }
}
