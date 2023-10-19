import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environtments } from '.env/environtments';
import { Send } from '../interfaces/send.interface';

@Injectable({ providedIn: 'root' })
export class SendService {
  private baseUrl: string = environtments.baseUrl;
  constructor(private http: HttpClient) {}

  getSends(): Observable<Send[]> {
    return this.http.get<Send[]>(`${this.baseUrl}/sends`);
  }
  getSendsById(id: string): Observable<Send | undefined> {
    return this.http
      .get<Send>(`${this.baseUrl}/sends/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  addSend(send: Send): Observable<Send> {
    return this.http.post<Send>(`${this.baseUrl}/sends`, send);
  }
  deleteSendById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/sends/${id}`)
    .pipe(
      map( resp => true),
    catchError( err => of(false)),
    
    );
  }
}
