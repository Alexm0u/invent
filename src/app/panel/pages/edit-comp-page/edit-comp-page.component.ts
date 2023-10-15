import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../interfaces/companies.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-comp-page',
  templateUrl: './edit-comp-page.component.html',
  styles: [],
})
export class EditCompPageComponent implements OnInit {
  public companyForm = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>(''),
    direction: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    postalCodes: new FormControl<number[]>([]),
  });

  constructor(
    private companyService: CompaniesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  get currentCompany(): Company {
    const company = this.companyForm.value as Company;
    return company;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.companyService.getCompanyById(id)))
      .subscribe((company) => {
        if (!company) return this.router.navigateByUrl('/');

        this.companyForm.reset(company);
        return;
      });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) return;

    if (this.currentCompany.id) {
      this.companyService
        .updateCompany(this.currentCompany)
        .subscribe((company) => {
          this.showSnackbar(`${company.name} actualizada!` );
        });
      return;
    }
    this.companyService.addCompany(this.currentCompany).subscribe((company) => {
      this.router.navigate(['/panel/edit', company.id])
      this.showSnackbar(`${company.name} creada!` );
    });
    
  }
  showSnackbar(message: string):void{
    this.snackbar.open(message, 'Hecho',{
      duration: 2500,
    } )
  }
}
