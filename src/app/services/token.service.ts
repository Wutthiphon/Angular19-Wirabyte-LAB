import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const USERNAME_KEY = 'username';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private usernameSubject = new BehaviorSubject<string | null>(
    this.getUsername()
  );

  constructor() {
    this.usernameSubject.next(this.getUsername());
  }

  public saveUsername(username: string): void {
    window.sessionStorage.setItem(USERNAME_KEY, username);
    this.usernameSubject.next(username);
  }

  public getUsername(): string | null {
    return window.sessionStorage.getItem(USERNAME_KEY);
  }

  public clearUsername(): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    this.usernameSubject.next(null);
  }

  public getUsernameObservable() {
    return this.usernameSubject.asObservable();
  }
}
