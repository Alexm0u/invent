import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from '../interfaces/package.interface';
import { environtments } from '.env/environtments';

@Injectable({ providedIn: 'root' })
export class PackageService {
  private baseUrl: string = environtments.baseUrl;
  constructor(private http: HttpClient) {}

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.baseUrl}/packageTypes`);
  }
}
