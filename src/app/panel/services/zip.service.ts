import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZipService {
  constructor() {}

  assignCompanyByZipCode(postalCode: string): string {
    const postalCodeNumber = parseInt(postalCode);
    switch (true) {
      case postalCodeNumber >= 15000 && postalCodeNumber <= 19999:
        return '1'; 
      case postalCodeNumber >= 20000 && postalCodeNumber <= 25999:
        return '2'; 
      default:
        return '3'; 
    }
  }

  getCompanyNameFromId(companyId: string): string {
    switch (companyId) {
      case '1':
        return 'Correos';
      case '2':
        return 'Seur';
      case '3':
        return 'Invent';
      default:
        return 'Desconocido';
    }
  }
}
