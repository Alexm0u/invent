import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environtments } from '.env/environtments';
import { User } from '../interfaces/user.interface';
import { tap, Observable } from 'rxjs'

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = environtments.baseUrl;
    private user?: User;
    constructor(private http: HttpClient) { }
    
    get currentUser(): User|undefined {
        if (!this.user) return undefined;
        return structuredClone (this.user);
    }

    login(email: string, password: string):Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap( user => this.user = user),
                tap( user => localStorage.setItem('token', 'asd28hd2b2'))
            );
    }
    logout(){
        this.user = undefined;
        localStorage.clear();
      }
}