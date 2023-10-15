import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../interfaces/companies.interface';

@Component({
  selector: 'app-edit-comp-page',
  templateUrl: './edit-comp-page.component.html',
  styles: [],
})
export class EditCompPageComponent {
  public companyForm = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>(''),
    direction: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    postalCodes: new FormControl<number[]>([]),
  });

  constructor(private companyService: CompaniesService) {}

  get currentCompany(): Company {
    const company = this.companyForm.value as Company;
    return company;
  }

  onSubmit(): void {
    if (this.companyForm.invalid) return;

    if (this.currentCompany.id) {
      console.log('Company ID:', this.currentCompany.id); // Agrega el console.log aquí
      this.companyService.updateCompany(this.currentCompany)
        .subscribe(company => {
            // Lógica adicional de actualización si es necesario
        });
        return;
    }
    this.companyService.addCompany(this.currentCompany)
      .subscribe(company => {
        // Lógica adicional de añadir si es necesario
      });
    // this.compService.updateCompany()
  }

}
