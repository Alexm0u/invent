import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/companies.interface';
import { environtments } from '.env/environtments';

@Injectable({ providedIn: 'root' })
export class CompaniesService {
  private baseUrl: string = environtments.baseUrl;
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies`);
  }
}
