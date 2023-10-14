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
  public compForm = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>(''),
    direction: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    postalCodes: new FormControl<number[]>([]),
  });

  constructor(private compService: CompaniesService) {}

  get currentComp(): Company {
    const comp = this.compForm.value as Company;
    return comp;
  }

  onSubmit(): void {
    if (this.compForm.invalid) return;

    if (this.currentComp.id) {
      this.compService.updateCompany(this.currentComp)
        .subscribe(comp => {

        });
        return;
    }
    this.compService.addCompany(this.currentComp)
      .subscribe(comp => {
        // navegar a companies
      })
    // this.compService.updateCompany()
  }
}
