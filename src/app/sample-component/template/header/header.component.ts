import { Component } from '@angular/core';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'sample-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  username: string = '';

  constructor(private tokenService: TokenService) {
    this.tokenService.getUsernameObservable().subscribe({
      next: (username) => {
        console.log('Header Username:', username);
        this.username = username || '';
      },
    });
  }
}
