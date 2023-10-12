import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environtments } from '.env/environtments';
import { Send } from '../interfaces/send.interface';

@Injectable({ providedIn: 'root' })
export class SendService {
  private baseUrl: string = environtments.baseUrl;
  constructor(private http: HttpClient) {}

  getSends(): Observable<Send[]> {
    return this.http.get<Send[]>(`${this.baseUrl}/sends`);
  }
}
