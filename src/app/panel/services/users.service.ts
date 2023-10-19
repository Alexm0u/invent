import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environtments } from '.env/environtments';
import { User } from '../interfaces/users.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl: string = environtments.baseUrl;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
