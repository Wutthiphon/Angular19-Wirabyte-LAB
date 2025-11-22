import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://learning.wutthiphon.space/wutthiphon/api/';

const HTTP_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export interface User {
  birthday: string;
  full_name: string;
  gender: string;
  password: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'users', HTTP_OPTIONS);
  }
}
