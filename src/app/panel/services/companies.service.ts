import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, map } from 'rxjs';
import { Company } from '../interfaces/companies.interface';
import { environtments } from '.env/environtments';

@Injectable({ providedIn: 'root' })
export class CompaniesService {
  private baseUrl: string = environtments.baseUrl;
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies`);
  }
  getCompanyById(id: string): Observable<Company | undefined> {
    return this.http
      .get<Company>(`${this.baseUrl}/companies/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.baseUrl}/companies`, company);
  }
  updateCompany(company: Company): Observable<Company> {
    if (!company.id) throw Error('Se requiere id de Empresa');
    return this.http.patch<Company>(
      `${this.baseUrl}/companies/${company.id}`,
      company
    );
  }
  deleteCompanyById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/companies/${id}`)
    .pipe(
      map( resp => true),
    catchError( err => of(false)),
    
    );
  }
}
